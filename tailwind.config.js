/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/Components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        bgContainer: "linear-gradient(to right bottom, #fdb809, #000000)",
        bgHeaderButton: "linear-gradient(to right bottom,#fdb809,#000000)",
        bgRecipeTitle: "linear-gradient(to right bottom,#fdb809,#000000)",
        bgDirectionBtn:
          "linear-gradient(to right bottom, #fdb809,#000000)",

        bgUploadBtn:
          "linear-gradient(to right bottom, #fdb809,#000000)",
        bgImage: "linear-gradient(to right bottom,#fdb809,#000000)",
      },
      color: {
        howto: "rgb(0,0,0)",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

