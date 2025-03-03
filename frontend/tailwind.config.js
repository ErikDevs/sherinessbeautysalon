/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // White in HEX
        secondary: "#000000", // Black in HEX
        accent: "#BB00FF", // Tailwind's pink-500 HEX equivalent
      },
      fontFamily: {
        script: ["MonteCarlo", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
