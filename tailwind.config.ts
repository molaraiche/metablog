import type { Config } from "tailwindcss";

const config: Config = {
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
        "secondary-700": "#52525B",
        "secondary-800": "#52535F",
        "secondary-900": "#141624",
      },
      fontFamily: {
        work: ["var(--font-work-sans)"],
        jakarta: ["var(--font-plus-jakarta-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
