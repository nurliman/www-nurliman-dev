module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals"],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "@next/next/no-img-element": 0,
    "react-hooks/exhaustive-deps": 0,
  },
};
