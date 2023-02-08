/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "rgb(141, 247, 17)",
        yellow: "rgb(255, 215, 55)"
      }
    },
  },
  plugins: [],
}
