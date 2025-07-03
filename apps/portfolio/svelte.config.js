import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      "@app.css": "./src/app.css",
    },
    prerender: {
      // Set the prerender origin to ensure the correct canonical URL is used during prerendering.
      // By default, SvelteKit uses `http://sveltekit-prerender`, which is not desired for production.
      // This value should match the site's actual production URL.
      origin: "https://nurliman.dev",
    },
  },
};

export default config;
