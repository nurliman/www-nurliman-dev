import twPlugin from "tailwindcss/plugin";
import baseStyles from "./styles/base";
import componentsStyles from "./styles/components";
import utilsStyles from "./styles/utils";
import { preset } from "./preset";

export const plugin = twPlugin.withOptions<object | void>(
  (_options) =>
    async ({ addBase, addComponents, addUtilities }) => {
      addBase(baseStyles);
      addComponents(componentsStyles);
      addUtilities(utilsStyles);
    },
  (_options) => {
    return preset;
  },
);
