import twPlugin from "tailwindcss/plugin";
import nurlimanTailwind from "@nurliman.dev/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts,jsx,tsx}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        transducer: [`"Transducer"`, "sans-serif"],
        "transducer-condensed": [`"TransducerCondensed"`, "sans-serif"],
        "transducer-condensed-oblique": [`"TransducerCondensedOblique"`, "sans-serif"],
        "transducer-extended": [`"TransducerExtended"`, "sans-serif"],
        "transducer-extended-oblique": [`"TransducerExtendedOblique"`, "sans-serif"],
        "transducer-oblique": [`"TransducerOblique"`, "sans-serif"],
        "racing-sans": [`"Racing Sans One"`, "sans-serif"],
      },
    },
  },
  plugins: [
    nurlimanTailwind(),
    twPlugin(({ addBase, theme }) => {
      addBase({
        ":root,html,body": {
          minHeight: "100vh",
          height: "100%",
          scrollBehavior: "smooth",
        },
        body: {
          padding: "0",
          margin: "0",
          fontFamily: `
            ${theme("fontFamily.transducer")},
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue
          `,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        img: {
          // no drag
          "-webkit-user-drag": "none",
          "-khtml-user-drag": "none",
          "-moz-user-drag": "none",
          "-o-user-drag": "none",
          "-ms-user-drag": "none",
          "user-drag": "none",

          // no select
          "-webkit-user-select": "none",
          "-khtml-user-select": "none",
          "-moz-user-select": "none",
          "-o-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        },
      });
    }),
  ],
};
