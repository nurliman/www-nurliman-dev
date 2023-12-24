// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",

  css: [
    "~/assets/css/fonts/transducer/plain.css",
    "~/assets/css/fonts/transducer/extended.css",
    "@fontsource/racing-sans-one/latin.css",
    "~/assets/css/main.css",
  ],

  app: {
    rootId: "www-nurliman-dev",
    head: {
      title:
        "Nurliman Diara Aria | Web Developer Portfolio - Crafting Digital Experiences with Excellence",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          "http-equiv": "x-ua-compatible",
          content: "ie=edge",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          href: "/manifest.json",
          rel: "manifest",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
        },
        {
          href: "/apple-touch-icon.png",
          rel: "apple-touch-icon",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      "postcss-dark-theme-class": {
        darkSelector: ".dark",
        lightSelector: ".light",
      },
      tailwindcss: {},
      "postcss-flexbugs-fixes": {},
      "postcss-preset-env": {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
          "nesting-rules": false,
        },
      },
    },
  },

  experimental: {
    inlineSSRStyles: false,
  },
});
