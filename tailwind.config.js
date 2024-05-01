/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
       Black: "#1E2832",
       primaryBG: "#1e28320d",
      }
    },
    fontFamily:{
      primary: ["Roboto","sans-serif"],
     secondary:["Cormorant Upright"," serif"],
     opensans:[ "Open Sans", "sans-serif"]
    },
    container:{
      center: true,
    },

  },
  plugins: [],
}