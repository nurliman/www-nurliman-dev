import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme("colors.black"),
      }),
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
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
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

      addComponents({
        ".the-white-button": {
          color: theme("colors.black"),
          backgroundColor: theme("colors.white"),
          transition: "background-color 150ms ease-in-out",
          "&:hover": {
            backgroundColor: theme("colors.zinc.100"),
          },
          "&:active": {
            backgroundColor: theme("colors.zinc.200"),
          },
        },
      });

      addUtilities({
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      });
    }),
  ],
};
