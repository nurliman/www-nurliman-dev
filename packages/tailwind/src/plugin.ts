import twPlugin from "tailwindcss/plugin";
import { preset } from "./preset";
import baseStyles from "./styles/base";
import componentsStyles from "./styles/components";
import utilsStyles from "./styles/utils";

export const plugin = twPlugin.withOptions<object | undefined>(
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
