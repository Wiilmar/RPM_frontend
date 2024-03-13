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
        blueLight: "#003566",
        amarillo: "#FFC300",
        amarilloTitle: "#DBAC00",
        whiteThin: "#E3E3E3",
        whiteLight: "#D9D9D9",
        azulclaro: "#E0F4FF",
        rojo: "FF0000"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      backgroundImage: {}
    },
  },
  plugins: [],
}