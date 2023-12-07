import { plugin } from "@nurliman.dev/tailwind";

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
  plugins: [plugin()],
};
