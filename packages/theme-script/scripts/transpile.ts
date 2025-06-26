import path from "node:path";
import dedent from "dedent";
import fse from "fs-extra";
import lodashEscape from "lodash-es/escape";

const SCRIPT_PATH = path.join(process.cwd(), "src/script.ts");
const OUTPUT_PATH = path.join(process.cwd(), ".generated/script.ts");

async function main() {
  // check if script exists
  if (!fse.pathExistsSync(SCRIPT_PATH)) {
    console.error(`Script not found at ${SCRIPT_PATH}`);
    process.exit(1);
  }

  const [transpiledScript] = await Promise.all([
    // transpile script
    Bun.build({
      entrypoints: [SCRIPT_PATH],
      target: "browser",
      minify: true,
    })
      .then((result) => result?.outputs?.[0]?.text?.())
      .then((text) => text?.trim?.() ?? ""),

    // ensure output directory exists and clear it
    fse.ensureDir(path.dirname(OUTPUT_PATH)).then(() => fse.emptyDir(path.dirname(OUTPUT_PATH))),
  ]);

  const ts = dedent`
    import lodashUnescape from "lodash.unescape";
    export const script: string = lodashUnescape("${lodashEscape(transpiledScript)}");
    export default script;
  `;

  // write transpiled script
  await fse.writeFile(OUTPUT_PATH, ts);
}

main();
