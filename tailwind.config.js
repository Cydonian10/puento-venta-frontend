/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important:true,
  theme: {
    extend: {
      colors: {
          primary: "#3F51B5"
      }
    },
  },
  plugins: [],
}