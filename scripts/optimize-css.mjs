import { PurgeCSS } from "purgecss";
import fs from "fs/promises";

async function optimizeCss() {
  const purgeCSSResult = await new PurgeCSS().purge({
    content: ["dist/**/*.html", "dist/**/entry.*.js"],
    css: ["dist/**/*.css"],
    safelist: [/^ps/],
  });

  await Promise.all(
    purgeCSSResult.map(({ file, css }) => {
      console.log("optimize", file);
      return fs.writeFile(file, css, { encoding: "utf8", flag: "w" });
    }),
  );
}

optimizeCss();
