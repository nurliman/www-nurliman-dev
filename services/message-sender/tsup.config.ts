import { defineConfig } from "tsup";

export default defineConfig({
  entry: { worker: "src/index.ts" },
  format: ["esm"],
  bundle: true,
  sourcemap: true,
  clean: true,
});
