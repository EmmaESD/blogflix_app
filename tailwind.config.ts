import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bgDark: "#000000",
      bgGrey: "#141414",
      main: "#E50913",
      white: "#FDFEFC",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
