import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-100": "#F4F4F5",
        "secondary-200": "#E8E8EA",
        "secondary-400": "#A1A1AA",
        "secondary-600": "#52525B",

        "secondary-800": "#52535F",
        "secondary-900": "#141624",
        lightBackground: "#ffffff",
        darkBackground: "#181A2A",
        tagBg: "rgba(75, 107, 251, 0.05)",
      },
      fontFamily: {
        work: ["var(--font-work-sans)"],
        jakarta: ["var(--font-plus-jakarta-sans)"],
      },
      screens: {
        xsm: "285px",
      },
      boxShadow: {
        "shadow-md": "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
      },
    },
  },
  plugins: [typography],
};

export default config;
