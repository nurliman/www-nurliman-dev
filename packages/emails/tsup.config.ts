import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    clean: true,
    dts: true,
    sourcemap: !options.watch,
  };
});
