import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    vue({
      appEntrypoint: "/src/pages/_app",
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
