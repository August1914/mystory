const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: ['./themes/**/*.html','./themes/**/*.js'],
  },
  theme: {
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
