import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "hybrid",
  adapter: vercel(),
});
