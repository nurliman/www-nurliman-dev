import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts", "src/core.ts", "src/nuxt.ts"],
    format: ["cjs", "esm"],
    target: "es5",
    clean: true,
    dts: true,
    sourcemap: !options.watch,
  };
});
