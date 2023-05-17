/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '13rem',
      },
      colors: {
        primary: {
          100: '#1C9AEF',
          200: '#1A8CD8',
        },
      }
    },
  },
  plugins: [],
}
