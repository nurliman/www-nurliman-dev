import script from "@generated/script.ts";
import pupa from "pupa";

export type Theme = "light" | "dark";

export type CreateThemeScriptArgs = {
  defaultTheme: Theme;
  oppositeTheme: Theme;
  localStorageKey: string;
};

export function createThemeScript(args: CreateThemeScriptArgs): string {
  return pupa(script, args);
}
