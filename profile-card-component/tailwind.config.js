/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        darkCyan: "hsl(185, 75%, 39%)",
        veryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
        darkGrayishBlue: "hsl(227, 10%, 46%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
