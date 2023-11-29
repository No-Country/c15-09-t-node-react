/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppings: ["Poppins"],
      },
      colors: {
        primary: "#FE9130",
        secondary: "#FEC38E",
      },
    },
  },
  plugins: [],
};
