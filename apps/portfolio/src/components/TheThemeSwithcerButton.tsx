import { Button } from "@/components/ui/button";
import { THEME_LOCAL_STORAGE_KEY } from "@/constants";
import type { Theme } from "@/types";
import { clsx } from "clsx";
import { type ComponentProps, createSignal, onCleanup, onMount, splitProps } from "solid-js";

export type TheThemeSwithcerButtonProps = ComponentProps<typeof Button> & {};

export default function TheThemeSwithcerButton(props: TheThemeSwithcerButtonProps) {
  const [localProps, restProps] = splitProps(props, ["children", "class", "classList"]);

  /** State for the current theme */
  const [currentThemeState, setThemeState] = createSignal<Theme | null>(null);
  /** Reference for the media query */
  const [mediaQuery, setMediaQuery] = createSignal<MediaQueryList | null>(null);

  /** Update the global theme state and localStorage */
  const updateThemeState = (theme: Theme) => {
    setThemeState(theme); // Update currentTheme value
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme); // Store theme in localStorage

    // Change the class for document.documentElement based on the updated theme
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  };

  /** Set the theme based on user preference or provided theme */
  const setTheme = (theme?: Theme) => {
    // If no specific theme provided, use user's color scheme preference
    if (theme !== "light" && theme !== "dark") {
      const isDarkModePreferred = mediaQuery()?.matches;
      updateThemeState(isDarkModePreferred ? "dark" : "light");
      return;
    }

    if (theme === currentThemeState()) return;

    updateThemeState(theme);
  };

  /** Toggle between light and dark themes */
  const switchTheme = () => {
    setTheme(currentThemeState() === "light" ? "dark" : "light");
  };

  onMount(() => {
    /** Handle changes in localStorage, specifically for theme changes */
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key !== THEME_LOCAL_STORAGE_KEY) return;
      setTheme(event.newValue as Theme);
    };

    /** Function to handle changes in media query */
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    /** Get the theme from local storage and set it */
    const setupTheme = () => {
      const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme;
      setTheme(theme);
    };

    // Set up media query for dark mode preference
    setMediaQuery(window.matchMedia("(prefers-color-scheme: dark)"));
    setupTheme();

    window.addEventListener("storage", handleStorageChange);
    mediaQuery()?.addEventListener?.("change", handleMediaQueryChange);

    onCleanup(() => {
      window.removeEventListener("storage", handleStorageChange);
      mediaQuery()?.removeEventListener?.("change", handleMediaQueryChange);
    });
  });

  return (
    <Button
      {...restProps}
      size="icon"
      variant="ghost"
      class={clsx(
        "!size-10 dark:!border relative rounded-lg",
        localProps.class,
        localProps.classList,
      )}
      onClick={() => switchTheme()}
    >
      <img
        src="/assets/moon.svg"
        alt="Moon"
        height="24px"
        width="24px"
        loading="lazy"
        class="absolute-center opacity-100 transition-opacity dark:opacity-0"
      />
      <img
        src="/assets/sun.svg"
        alt="Sun"
        height="27px"
        width="27px"
        loading="lazy"
        class="absolute-center opacity-0 transition-opacity dark:opacity-100"
      />
    </Button>
  );
}
