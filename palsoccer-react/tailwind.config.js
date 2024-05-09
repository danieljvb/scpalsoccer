/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{        
        primary: "#00040f",
        secondary: "#00f6ff",
        background:"#F7FAFF",
        darkBlue: "#1B4282",
        lightBlue:"#BDD6FF",
        dimBlue:"#F7FAFF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        'navbarcolor':"#11101d",
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

