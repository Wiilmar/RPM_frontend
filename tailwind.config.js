/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: "#000000",
        blueDark: "#000814",
        amarillo: "#FFC300",
        blueLight: "#003566",
        whiteThin: "#E3E3E3",
        whiteLight: "#D9D9D9"
      }
    },
  },
  plugins: [],
}

