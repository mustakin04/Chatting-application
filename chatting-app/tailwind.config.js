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
        'demo': '0 10px 10px rgba(0, 0, 0, 0.5)'
      },
      colors: {
        'mustakin': '#243c5a',
        "homecolor" :"#01aa85",
      },
      backgroundImage: {
        'facebook': "url('/src/assets/FacebookCover.jpg')",
        "chatbg":"url('/src/assets/stoc.jpg')"
        
      }

    },
  },
  plugins: [],
}