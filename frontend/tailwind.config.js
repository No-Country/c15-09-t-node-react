/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppings: ["Poppins"],
      },
      colors: {
        primary: "#9d2c15",
        secondary: "#802411",
        mostaza: "#e0b61f",
        gray: "#677489",
        "gray-light": "#E3E8EF",
        "gray-dark": "#2E2F33",
      },
    },
  },
  plugins: [],
};
