import type { Config } from "tailwindcss";
import { preset } from "./src/preset";

const config = {
  darkMode: "class",
  content: [],
  presets: [preset],
} satisfies Config;

export default config;
