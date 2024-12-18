/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif',],
        'sans': ['Open Sans', 'sans-serif',],
        'nunito': ['Nunito', 'sans-serif',]
      },
      dropShadow: {
        'demo': '0 35px 35px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        'mustakin': '#243c5a',
      },

    },
  },
  plugins: [],
}