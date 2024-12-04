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
        'xxl': '0 4px 4x rgba(4, 4, 4, 0.25)',
      }

    },
  },
  plugins: [],
}