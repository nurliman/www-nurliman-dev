import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solid()],
  vite: {
    css: {
      modules: {
        generateScopedName: "[hash:base64:6]",
      },
    },
  },
});
