import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sentry(),
    solidJs(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
