import path from "node:path";
import fse from "fs-extra";
import escape from "lodash-es/escape";
import swc from "@swc/core";

const SCRIPT_PATH = path.join(process.cwd(), "src/script.ts");
const OUTPUT_PATH = path.join(process.cwd(), ".generated/script.ts");
const SWC_CONFIG = {
  minify: true,
  jsc: {
    target: "es3",
    parser: {
      syntax: "typescript",
    },
    minify: {
      mangle: true,
      compress: {
        unused: true,
      },
    },
  },
} as const satisfies swc.Options;

const main = async () => {
  const isScriptExists = await fse.pathExists(SCRIPT_PATH);

  // check if script exists
  if (!isScriptExists) {
    console.error(`Script not found at ${SCRIPT_PATH}`);
    process.exit(1);
  }

  const [script] = await Promise.all([
    // read script
    fse.readFile(SCRIPT_PATH, "utf-8"),

    // ensure output directory exists
    fse.ensureDir(path.dirname(OUTPUT_PATH)),
  ]);

  const [transpiledScript] = await Promise.all([
    // transpile script
    swc.transform(script, SWC_CONFIG).then(({ code }) => code),

    // clear output directory
    fse.emptyDir(path.dirname(OUTPUT_PATH)),
  ]);

  const ts = `
    import unescape from "lodash.unescape";
    export const script: string = unescape(\`${escape(transpiledScript)}\`);
    export default script;
  `;

  // write transpiled script
  await fse.writeFile(OUTPUT_PATH, ts);
};

main();
