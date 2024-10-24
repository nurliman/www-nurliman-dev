/** @type {import('postcss-load-config').Config} */
export default {
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
};
