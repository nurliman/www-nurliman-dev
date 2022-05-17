import { defineConfig } from "tsup";

export default defineConfig({
  entry: { worker: "src/index.ts" },
  bundle: true,
  sourcemap: true,
  clean: true,
  dts: true,
});
