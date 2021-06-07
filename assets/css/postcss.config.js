const themeDir = __dirname + "/../../";
const localLayouts = __dirname + "/../../../layouts";

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [themeDir, localLayouts]
    }),
    require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
    require('autoprefixer')({
      path: [themeDir]
    }),
  ]
}
