const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
