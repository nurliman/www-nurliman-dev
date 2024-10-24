/** @type {import('postcss-load-config').Config} */
export default (ctx) => ({
  map: ctx.options.map,
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    "postcss-dark-theme-class": {
      darkSelector: ".dark",
      lightSelector: ".light",
    },
    tailwindcss: {},
    cssnano: {
      preset: "default",
    },
  },
});
