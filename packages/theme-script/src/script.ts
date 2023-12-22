/**
 * This script is used to initialize the theme based on the user's preference.
 */
function initializeTheme() {
  try {
    const htmlClassList = document.documentElement.classList;
    const prefersDefault = window.matchMedia("(prefers-color-scheme: {{DEFAULT_THEME}})").matches;
    const themeInLocalStorage = localStorage.getItem("{{THEME_LOCAL_STORAGE_KEY}}");
    let theme: string;

    // If user has a stored theme, use that
    if (themeInLocalStorage === "light" || themeInLocalStorage === "dark") {
      theme = themeInLocalStorage;
    } else if (prefersDefault) {
      // If user has no stored theme, use their preferred default theme
      theme = "{{DEFAULT_THEME}}";
    } else {
      theme = "{{OPPOSITE_THEME}}";
    }

    // Update the class for document.documentElement based on the theme
    htmlClassList.remove("light", "dark");
    htmlClassList.add(theme);
  } catch (e) {
    console.error(e);
  }
}

initializeTheme();
