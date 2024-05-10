/**
 * This script is used to initialize the theme based on the user's preference.
 */
function initializeTheme(doc = document) {
  try {
    const media = window.matchMedia;
    const htmlClassList = doc.documentElement.classList;
    const prefersDefault = !!media && media("(prefers-color-scheme:{{defaultTheme}})").matches;
    const themeInLocalStorage = localStorage.getItem("{{localStorageKey}}");
    let theme: string;

    // If user has a stored theme, use that
    if (themeInLocalStorage === "light" || themeInLocalStorage === "dark") {
      theme = themeInLocalStorage;
    } else if (prefersDefault) {
      // If user has no stored theme, use their preferred default theme
      theme = "{{defaultTheme}}";
    } else {
      theme = "{{oppositeTheme}}";
    }

    // Update the class for document.documentElement based on the theme
    htmlClassList.remove("light", "dark");
    htmlClassList.add(theme);
  } catch (e) {
    console.error(e);
  }
}

initializeTheme();

document.addEventListener("astro:before-swap", (event) => {
  type Event = import("astro:transitions/client").TransitionBeforeSwapEvent;

  // Pass the incoming document to set the theme on it
  initializeTheme((event as Event)?.newDocument);
});
