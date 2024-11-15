/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "black-1": "#171923",
        "black-2": "#252A37"
      },
      colors: {
        "orange": "#eb4432",
        "white-1": "#ffffff",
        "white-2": "#e7e8f2",
        "gray-1": "#b5b5bd",
        "gray-2": "#93939e",
      },
    },
  },
  plugins: [],
};
