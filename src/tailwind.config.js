/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        goldAwards: "#FFD700",
        blackAwards: "#000000",
        whiteAwards: "#FFFFFF",
        lightGray: "#F5F5F5",
      },
    },
  },
  plugins: [],
}
