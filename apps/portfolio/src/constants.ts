import type { Theme } from "@/types";

export const THEME_LOCAL_STORAGE_KEY = "theme" as const;
export const DEFAULT_THEME = "light" as const satisfies Theme;
export const OPPOSITE_THEME: Theme = DEFAULT_THEME === "light" ? "dark" : "light";
