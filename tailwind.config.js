/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
