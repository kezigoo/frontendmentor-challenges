/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Lexend Deca", "sans-serif"],
      },
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkDesaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        white: "hsl(0, 0%, 100%)",
        slightlyTransparentWhite1: "hsla(0, 0%, 100%, 0.75)",
        slightlyTransparentWhite2: "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
};
