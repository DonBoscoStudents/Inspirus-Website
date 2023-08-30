/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/pages/LoadingPage/App.jsx"
],
  theme: {
    fontFamily:{
      'minecraft':'Minecraft',
      'rubik':'Rubik',
    },
    extend: {},
  },
  plugins: [],
}

