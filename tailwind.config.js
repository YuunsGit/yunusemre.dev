const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-overpass)", ...fontFamily.sans],
        mono: ["var(--font-grotesk)", ...fontFamily.mono],
      },
      colors: {
        primary: {
          100: "#B7E8CD",
          200: "#85A895",
          300: "#7B9C8A",
          400: "#678273",
          500: "#495C51",
        },
        secondary: "#f9f9ff",
        ternary: {
          100: "#F7DADA",
          200: "#B8A2A2",
          300: "#786969",
          400: "#6A5D5D",
          500: "#524848",
        },
        tailwind: "#38bdf8",
        javascript: "#f0db4f",
        astro: "#ff5b02",
        mdx: "#fcb32c",
        typescript: "#3178c6",
        react: "#61dafb",
        github: "#222",
        cra: "#09d3ac",
        redis: "#f01b1a",
      },
    },
  },
  plugins: [],
};
