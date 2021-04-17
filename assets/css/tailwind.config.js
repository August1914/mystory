const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: ['./themes/**/*.html','./themes/**/*.js'],
  },
  theme: {
    fontFamily: {
      title: ['Anton'],
      'serif': ['spectral', 'serif'],
      'sans': ['Quattrocento sans', 'san-serif']
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      'xs': '380px',      
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundOpacity: {
     10: '0.1',
     20: '0.2',
     30: '0.3',
     40: '0.4',
     50: '0.5',
     60: '0.6',
     70: '0.7',
     80: '0.8',
     90: '0.9',
    },
    options: {
      safelist: ['code'],
    },
    minWidth: {
      '0': '0',
      '1/5': '20%',
      '2/5': '40%',
      '1/2': '50%',
      '3/5': '60%',
      '3/4': '75%',
      'full': '100%',
    },
    maxWidth: {
      '0': '0',
      '1/5': '20%',
      '2/5': '45%',
      '1/2': '50%',
      '3/5': '60%',
      '3/4': '75%',
      'full': '100%',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      none: 'none',
      inherit: 'inherit',
      '2': '2 2 0%',
    },
    extend: {
      width: {
        88: '22rem',
        100: '28rem',
        116: '32rem',
        132: '36rem',
        148: '40rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require("tailwindcss-debug-screens"),
    require('tailwindcss-flexbox-order')(),
  ],
}
