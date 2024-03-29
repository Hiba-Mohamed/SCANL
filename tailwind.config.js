/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        peach: "#EF798A",
      },
      width:{
        '520':'520px' 
      }
    },
  },
  plugins: [],
};
