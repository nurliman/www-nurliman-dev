import pupa from "pupa";
import script from "@generated/script";

export type Theme = "light" | "dark";

export type CreateThemeScriptArgs = {
  defaultTheme: Theme;
  oppositeTheme: Theme;
  localStorageKey: string;
};

export function createThemeScript(args: CreateThemeScriptArgs): string {
  return pupa(script, args);
}
