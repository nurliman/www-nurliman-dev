import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "colors.black",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities, theme }) => {
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
