module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  purge: [],
  theme: {
    extend: {
      colors: {
        themegreen: '#2F7312', // Custom blue color
        textwhite: "#FFFFFF",
        themeblack: "#000000",
        footercolor: "	#081c05"
      },
      filter: {
        blur: "blur(10px)",
      },
      fontFamily:{
        "hedaingfont":["libra"]
      }
      
    },
  },
  variants: {},
  plugins: [],
}
