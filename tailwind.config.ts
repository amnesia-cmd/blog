import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f8faf9",
          100: "#edf1ef",
          200: "#d8dfdc",
          300: "#b6c2bd",
          400: "#8e9d98",
          500: "#6e7d78",
          600: "#56635f",
          700: "#45504d",
          800: "#28312f",
          900: "#171d1b",
          950: "#0d1211"
        },
        terminal: "#91d18b",
        copper: "#c27b53"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"]
      },
      maxWidth: {
        article: "72ch"
      }
    }
  },
  plugins: [typography]
};

export default config;
