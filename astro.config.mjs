import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

const astroConfig = defineConfig({
  integrations: [solid()],
  vite: {
    css: {
      modules: {
        generateScopedName:
          process.env.NODE_ENV === "production" ? "[hash:base64:6]" : "_[local]_[hash:base64:5]",
      },
    },
  },
});

export default astroConfig;
