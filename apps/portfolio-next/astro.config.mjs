import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import utwm from "unplugin-tailwindcss-mangle/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), svelte()],
  vite: {
    plugins: [utwm()],
  },
});
