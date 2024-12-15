/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        '8h': '730px'
      },
      width: {
        '4h': '420px'
      },
      colors:{
        'd-violet': 'hsl(278, 68%, 11%)'
      },
      fontFamily:{
        'display': ['Space Grotesk']
      }
    },
  },
  plugins: [],
}

