const { title } = require("process");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "black-1": "#13151D",
        "black-2": "#252A37",
      },
      colors: {
        orange: "#eb4432",
        "white-1": "#ffffff",
        "white-2": "#e7e8f2",
        "gray-1": "#161922",
        "gray-2": "#b5b5bd",
        "gray-3": "#93939e",
      },
      borderRadius: {
        50: "50%",
      },
    },
  },
  plugins: [],
};
