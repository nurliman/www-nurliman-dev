/** @type {import('prettier').Config} */
const prettierConfig = {
  plugins: ["./node_modules/prettier-plugin-astro"],
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};

module.exports = prettierConfig;
