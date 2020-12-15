module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif']
      },
    },
    cursor:{
      grab:'grab',
      grabbing:'grabbing'
    }
  },
  variants: {
    extend: {
      cursor:['focus','hover','active'],
    }
  },
  plugins: []
}
