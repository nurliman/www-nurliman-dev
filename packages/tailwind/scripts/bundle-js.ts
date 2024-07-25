import fs from "node:fs/promises";
import dts from "bun-plugin-dts-auto";
import pkg from "../package.json";

async function main() {
  const outdir = "dist";
  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.devDependencies,
    ...pkg.peerDependencies,
  });

  await fs.rm(outdir, {
    recursive: true,
    force: true,
  });

  await Bun.build({
    entrypoints: ["src/index.ts"],
    outdir,
    sourcemap: "linked",
    external,
    plugins: [dts()],
  });
}

main();
