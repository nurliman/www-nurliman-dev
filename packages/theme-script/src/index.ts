import pupa from "pupa";
import script from "@generated/script";

export type Theme = "light" | "dark";

export type CreateScriptArgs = {
  defaultTheme: Theme;
  oppositeTheme: Theme;
  localStorageKey: string;
};

export const createThemeScript = ({
  defaultTheme,
  oppositeTheme,
  localStorageKey,
}: CreateScriptArgs) => {
  return pupa(script, {
    DEFAULT_THEME: defaultTheme,
    OPPOSITE_THEME: oppositeTheme,
    THEME_LOCAL_STORAGE_KEY: localStorageKey,
  });
};
