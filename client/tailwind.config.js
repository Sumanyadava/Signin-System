/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lobs: ['Lobster', 'sans-serif'],
      Robo: ['Roboto','sans']
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

