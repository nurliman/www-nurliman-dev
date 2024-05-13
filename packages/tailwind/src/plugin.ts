import twPlugin from "tailwindcss/plugin";
import { preset } from "./preset.ts";
import baseStyles from "./styles/base.ts";
import componentsStyles from "./styles/components.ts";
import utilsStyles from "./styles/utils.ts";

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
