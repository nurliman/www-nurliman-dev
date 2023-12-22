import path from "node:path";
import fse from "fs-extra";
import escape from "lodash-es/escape";
import camelCase from "lodash-es/camelCase";
import map from "lodash-es/map";
import { globby } from "globby";
import { render } from "@react-email/render";

const OUTPUT_DIR = path.join(process.cwd(), ".generated");

const createIndexFile = async (filenames: string[]) => {
  const exports = filenames.map((filename) => `export { ${filename} } from "./${filename}";`);
  await fse.writeFile(path.join(OUTPUT_DIR, "index.ts"), exports.join("\n"));
};

const main = async () => {
  const paths = await globby(["./src/templates/**/*.tsx"], { absolute: true });

  const renderPromises = paths.map(async (filepath) => {
    const filename = path.basename(filepath, ".tsx");
    const template = await import(filepath).then((module) => module.default);
    const html = render(template());

    console.log(`Rendering ${filename}...`);

    return {
      filename,
      html,
      newFilename: camelCase(filename + "Html"),
    };
  });

  const renderedTemplates = await Promise.all(renderPromises);

  // ensure output directory exists
  await fse.ensureDir(OUTPUT_DIR);

  // clear output directory
  await fse.emptyDir(OUTPUT_DIR);

  const writeFilePromises = renderedTemplates.map(async ({ newFilename: name, html }) => {
    html = escape(html);

    const ts = `
      import unescape from "lodash.unescape";
      export const ${name}: string = unescape(\`${html}\`);
      export default ${name};
    `;

    await fse.writeFile(path.join(OUTPUT_DIR, `${name}.ts`), ts);

    console.log(`Wrote ${name}.ts`);
  });

  writeFilePromises.push(createIndexFile(map(renderedTemplates, "newFilename")));

  await Promise.all(writeFilePromises);

  console.log("Done!");
};

main();
