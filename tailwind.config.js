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
        "black-1": "#13151D",
        "black-2": "#252A37",
        "black-3": "#3A404F",
      },
      colors: {
        orange: "#eb4432",
        "white-1": "#ffffff",
        "gray-1": "#161922",
        "gray-2": "#374151",
      },
    },
  },
  plugins: [],
};
