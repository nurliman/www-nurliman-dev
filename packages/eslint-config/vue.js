module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  extends: [require.resolve("./index"), "plugin:vue/vue3-essential"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".vue"],
  },
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
    "vue/multi-word-component-names": "warn",
  },
};
