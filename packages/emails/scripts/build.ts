import path from "node:path";
import fse from "fs-extra";
import lodashEscape from "lodash-es/escape";
import lodashCamelCase from "lodash-es/camelCase";
import lodashMap from "lodash-es/map";
import dedent from "dedent";
import { globby } from "globby";
import { render } from "@react-email/render";

const OUTPUT_DIR = path.join(process.cwd(), ".generated");

async function createIndexFile(filenames: string[]) {
  const exports = filenames.map((filename) => `export { ${filename} } from "./${filename}";`);
  await fse.writeFile(path.join(OUTPUT_DIR, "index.ts"), exports.join("\n"));
}

async function main() {
  const paths = await globby(["./src/templates/**/*.tsx"], { absolute: true });

  const renderPromises = paths.map(async (filepath) => {
    const filename = path.basename(filepath, ".tsx");
    const template = await import(filepath).then((module) => module.default);
    const html = render(template());

    console.log(`Rendering ${filename}...`);

    return {
      filename,
      html,
      newFilename: lodashCamelCase(`${filename}Html`),
    };
  });

  const renderedTemplates = await Promise.all(renderPromises);

  // ensure output directory exists
  await fse.ensureDir(OUTPUT_DIR);

  // clear output directory
  await fse.emptyDir(OUTPUT_DIR);

  const writeFilePromises = renderedTemplates.map(async ({ newFilename: name, html }) => {
    html = lodashEscape(html);

    const ts = dedent`
      import lodashUnescape from "lodash.unescape";
      export const ${name}: string = lodashUnescape("${html}");
    `;

    await fse.writeFile(path.join(OUTPUT_DIR, `${name}.ts`), ts);

    console.log(`Wrote ${name}.ts`);
  });

  writeFilePromises.push(createIndexFile(lodashMap(renderedTemplates, "newFilename")));

  await Promise.all(writeFilePromises);

  console.log("Done!");
}

main();
