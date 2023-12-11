/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppings: ["Poppins"],
      },
      colors: {
        primary: "#FE9130",
        secondary: "#FEC38E",
        gray: "#677489",
        "gray-light": "#E3E8EF",
        "gray-dark": "#2E2F33",
      },
    },
  },
  plugins: [],
};
