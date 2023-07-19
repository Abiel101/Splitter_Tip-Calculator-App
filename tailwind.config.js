/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'inputBg': '#F3F9FA',
        'strongCyan': 'hsl(172, 67%, 45%)',
        'veryDarkCyan': 'hsl(183, 100%, 15%)',
        'darkGrayishCyan': 'hsl(186, 14%, 43%)',
        'grayishCyan': 'hsl(184, 14%, 56%)',
        'lightGrayishCyan': 'hsl(185, 41%, 84%)',
        'veryLightGrayishCyan': 'hsl(189, 41%, 97%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        'space-mono': 'Space Mono'
      }
    },
  },
  plugins: [],
}

