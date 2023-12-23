import pupa from "pupa";
import script from "@generated/script";

export type Theme = "light" | "dark";

export type CreateThemeScriptArgs = {
  defaultTheme: Theme;
  oppositeTheme: Theme;
  localStorageKey: string;
};

export const createThemeScript = (args: CreateThemeScriptArgs) => {
  return pupa(script, args);
};
