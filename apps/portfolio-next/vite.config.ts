import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import utwm from "unplugin-tailwindcss-mangle/vite";

export default defineConfig({
  plugins: [sveltekit(), { ...utwm(undefined), apply: "build" }],
});
