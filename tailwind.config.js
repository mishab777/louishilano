/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors:{
        primary:"#000000",
        secondary:"#000000",
        gold: "#bfa97c",
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT: "1rem",
        sm: "3rem"
      }
    }
    
  },
  plugins: [],
}

