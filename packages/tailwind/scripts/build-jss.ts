import fs from "node:fs/promises";
import url from "node:url";
import path from "node:path";
import cssnano from "cssnano";
import postcss from "postcss";
import postcssJs, { type CssInJs } from "postcss-js";
import postcssImport from "postcss-import";
import postcssDarkThemeClass from "postcss-dark-theme-class";
import tailwindcss, { type Config } from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";
import tailwindPlugin from "tailwindcss/plugin";
import slash from "slash";
import { preset } from "@/preset";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const TIPS = [
  "/* eslint-disable */",
  "/* prettier-ignore */",
  "",
  "/**",
  ` * THIS FILE IS GENERATED BY \`${slash(path.relative(ROOT_DIR, __filename))}\`.`,
  " * DO NOT EDIT THIS FILE DIRECTLY.",
  " */",
].join("\n");

const styles = ["base", "utils", "components"] as const;

// Transpiles all of our library's CSS to JS
const transpileCssToJs = async (cssEntryPath: string, plugins: Config["plugins"] = []) => {
  const selectors: string[] = [];

  const css = await fs.readFile(cssEntryPath, "utf8");

  let result = await postcss([
    postcssImport(),
    tailwindcssNesting(),
    postcssDarkThemeClass({ darkSelector: ".dark", lightSelector: ".light" }),
  ]).process(css, {
    from: cssEntryPath,
  });

  result.root.walk((node) => {
    if (node.type === "rule") {
      selectors.push(...node.selectors);
    }
  });

  const twConfig = {
    darkMode: "class",
    content: [{ raw: selectors.join(" ") }],
    presets: [preset],
    plugins: [...plugins],
  } satisfies Config;

  result = await postcss([tailwindcss(twConfig), cssnano({ preset: "default" })]).process(
    result.css,
    {
      from: cssEntryPath,
    },
  );

  let jss: CssInJs;
  jss = postcssJs.objectify(result.root);
  jss = patchMediaQueries(jss);

  // write the file
  await fs.writeFile(
    changeExtension(cssEntryPath, ".ts"),
    `${TIPS}\nconst styles: any = ${JSON.stringify(jss, null, 2)};\n\nexport default styles;\n`,
  );

  return jss;
};

// Moves all of the media queries towards the end of the cssInJs object.
const patchMediaQueries = (cssInJs: CssInJs) => {
  const mediaQueries: CssInJs = {};

  for (const key of Object.keys(cssInJs)) {
    if (key.startsWith("@media")) {
      mediaQueries[key] = cssInJs[key];
      delete cssInJs[key];
    }
  }

  for (const key of Object.keys(mediaQueries)) {
    cssInJs[key] = mediaQueries[key];
  }

  return cssInJs;
};

const changeExtension = (file: string, extension: string) => {
  const basename = path.basename(file, path.extname(file));
  return path.join(path.dirname(file), basename + extension);
};

const main = async () => {
  try {
    for (const style of styles) {
      const plugins: Config["plugins"] = [];

      if (["utils", "components"].includes(style)) {
        const baseStyles = (await import("@/styles/base")).default;
        const basePlugin = tailwindPlugin(({ addBase }) => addBase(baseStyles));
        plugins.push(basePlugin);
      }

      if (["components"].includes(style)) {
        const utilsStyles = (await import("@/styles/utils")).default;
        const utilsPlugin = tailwindPlugin(({ addUtilities }) => addUtilities(utilsStyles));
        plugins.push(utilsPlugin);
      }

      await transpileCssToJs(`src/styles/${style}.css`, plugins);

      console.info(`Successfully build ${style}.css`);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

console.time("build-jss");
main().finally(() => console.timeEnd("build-jss"));
