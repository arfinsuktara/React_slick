/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font family
      fontFamily: {
        'dm': ['DM Sans'],
        
      },
      // Font family
      // container
      maxWidth: {
        'headerContainer' : '1320px',
      },
      
     
      // container
      // color
      colors:{
        headerBg: "#ffffff",
        menuTextH: "#767676",
        menuText: "#262626",
        categoryBg:"#F5F5F3",
      },
      // color
      width:{
        catW:"20%",
        searchW:"60%",
      },
      backgroundImage:{
        bannerImg:"url('./src/assets/banner (2).png')"
      }
     
    },
  },
  plugins: [],
}

