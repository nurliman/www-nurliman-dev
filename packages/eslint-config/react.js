module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [require.resolve("./index"), "plugin:react/recommended"],
  plugins: ["@typescript-eslint", "react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
