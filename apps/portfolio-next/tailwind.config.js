import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "the-pink": {
          DEFAULT: "#ff90e8",
          50: "#fff4fd",
          100: "#ffe7fb",
          200: "#ffcef7",
          300: "#ff90e8",
          400: "#fe74e0",
          500: "#f540cc",
          600: "#d920ab",
          700: "#b4178a",
          800: "#93156f",
          900: "#78175b",
          950: "#51013a",
        },
        "the-teal": {
          DEFAULT: "#23a094",
          50: "#f1fcf9",
          100: "#d1f6ef",
          200: "#a2eddf",
          300: "#6cdccc",
          400: "#3ec3b4",
          500: "#23a094",
          600: "#1b867e",
          700: "#196c66",
          800: "#195653",
          900: "#194846",
          950: "#082b2a",
        },
      },
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
        ".the-white-pink-button": {
          color: theme("colors.black"),
          backgroundColor: theme("colors.white"),
          transition: "background-color 150ms ease-in-out",
          "&:hover": {
            backgroundColor: theme("colors.the-pink.300"),
          },
          "&:active": {
            backgroundColor: theme("colors.the-pink.200"),
          },
        },
        ".the-zinc-button": {
          color: theme("colors.black"),
          backgroundColor: theme("colors.zinc.200"),
          transition: "background-color 150ms ease-in-out",
          "&:hover": {
            backgroundColor: theme("colors.zinc.300"),
          },
          "&:active": {
            backgroundColor: theme("colors.zinc.400"),
          },
        },
        ".the-teal-button": {
          color: theme("colors.white"),
          backgroundColor: theme("colors.the-teal.500"),
          transition: "background-color 150ms ease-in-out",
          "&:hover": {
            backgroundColor: theme("colors.the-teal.600"),
          },
          "&:active": {
            backgroundColor: theme("colors.the-teal.700"),
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
        ".brutal-shadow-sm": {
          boxShadow: "2px 2px 0px rgba(0,0,0,1)",
        },
        ".brutal-shadow-md": {
          boxShadow: "4px 4px 0px rgba(0,0,0,1)",
        },
        ".brutal-btn-sm": {
          "&:active": {
            transform: "translate3d(1px, 1px, 0px)",
            boxShadow: "1px 1px 0px rgba(0,0,0,1)",
          },
        },
        ".brutal-btn-md": {
          "&:active": {
            transform: "translate3d(3px, 3px, 0px)",
            boxShadow: "1px 1px 0px rgba(0,0,0,1)",
          },
        },
      });
    }),
  ],
};
