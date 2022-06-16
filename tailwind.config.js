/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-brand": "#DD2242",
        "gray-brand": "#939393",
        "black-brand": "#010A20",
        "dark-blue-brand": "#020C21",
        "soft-white": "#E0E0E0",
        "dark-p": "#6F7787",
      },
    },
  },
  plugins: [],
};
