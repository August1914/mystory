const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: ['./themes/**/*.html','./themes/**/*.js'],
  },
  theme: {
    extend: {
      fontFamily: {
        title: ['Anton'],
        serif: ['spectral', 'serif'],
        sans: ['Quattrocento sans', 'san-serif']
    },
  },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
