import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "colors.black",
      },
      fontFamily: {
        transducer: [`"Transducer"`, "sans-serif"],
        "transducer-condensed": [`"TransducerCondensed"`, "sans-serif"],
        "transducer-condensed-oblique": [`"TransducerCondensedOblique"`, "sans-serif"],
        "transducer-extended": [`"TransducerExtended"`, "sans-serif"],
        "transducer-extended-oblique": [`"TransducerExtendedOblique"`, "sans-serif"],
        "transducer-oblique": [`"TransducerOblique"`, "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        body: {
          fontFamily: theme("fontFamily.transducer"),
          padding: "0",
          margin: "0",
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
