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
        sans: ["var(--font-inter)", ...fontFamily.sans],
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
      },
      backgroundImage: {
        "top-wave": "url('../../public/TopWave.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
