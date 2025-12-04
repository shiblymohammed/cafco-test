import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        creme: "#f6f1eb",
        alpha: "#171717",
        tango: "#284630",
        beta: "#ffffff",
      },
      fontFamily: {
        primary: ["var(--font-hammersmith)", "sans-serif"],
        secondary: ["var(--font-averia)", "serif"],
        brand: ["brand-primary", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
