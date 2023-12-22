<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useServerHead, useState } from "#imports";
import { createThemeScript } from "@nurliman.dev/theme-script";
import TheButton from "~/components/TheButton.vue";

export type Theme = "light" | "dark";

/** Key for storing theme in local storage */
const THEME_LOCAL_STORAGE_KEY = "theme" as const;
const DEFAULT_THEME = "light" as const satisfies Theme;
const OPPOSITE_THEME: Theme = DEFAULT_THEME === "light" ? "dark" : "light";

useServerHead({
  htmlAttrs: {
    class: DEFAULT_THEME,
  },
  script: [
    {
      innerHTML: createThemeScript({
        defaultTheme: DEFAULT_THEME,
        oppositeTheme: OPPOSITE_THEME,
        localStorageKey: THEME_LOCAL_STORAGE_KEY,
      }),
    },
  ],
});

/** State for the current theme */
const currentThemeState = useState<Theme | null>("theme", () => null);
/** Reference for the media query */
const mediaQuery = ref<MediaQueryList | null>(null);

/** Update the global theme state and localStorage */
const updateThemeState = (theme: Theme) => {
  currentThemeState.value = theme; // Update currentTheme value
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme); // Store theme in localStorage

  // Change the class for document.documentElement based on the updated theme
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
};

/** Set the theme based on user preference or provided theme */
const setTheme = (theme?: Theme) => {
  // If no specific theme provided, use user's color scheme preference
  if (theme !== "light" && theme !== "dark") {
    const isDarkModePreferred = mediaQuery.value?.matches;
    updateThemeState(isDarkModePreferred ? "dark" : "light");
    return;
  }

  if (theme === currentThemeState.value) return;

  updateThemeState(theme);
};

/** Toggle between light and dark themes */
const switchTheme = () => {
  setTheme(currentThemeState.value === "light" ? "dark" : "light");
};

/** Handle changes in localStorage, specifically for theme changes */
const handleStorageChange = (event: StorageEvent) => {
  if (event.key !== THEME_LOCAL_STORAGE_KEY) return;
  setTheme(event.newValue as Theme);
};

/** Function to handle changes in media query */
const handleMediaQueryChange = (event: MediaQueryListEvent) => {
  setTheme(event.matches ? "dark" : "light");
};

onMounted(() => {
  // Set up media query for dark mode preference
  mediaQuery.value = window.matchMedia("(prefers-color-scheme: dark)");

  // Get the theme from local storage and set it
  const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme;
  setTheme(theme);

  window.addEventListener("storage", handleStorageChange);
  mediaQuery.value?.addEventListener?.("change", handleMediaQueryChange);
});

onUnmounted(() => {
  window.removeEventListener("storage", handleStorageChange);
  mediaQuery.value?.removeEventListener?.("change", handleMediaQueryChange);
});
</script>

<template>
  <TheButton class="relative mr-2 h-10 w-10 rounded-lg" @click="switchTheme">
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
  </TheButton>
</template>
