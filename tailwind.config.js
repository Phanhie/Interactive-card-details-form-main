/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        '8h': '730px'
      },
      width: {
        '4h': '500px'
      },
      colors:{
        'd-violet': 'hsl(278, 68%, 11%)'
      },
      fontFamily:{
        'display': ['Space Grotesk']
      },
      backgroundImage: {
        'cardFront': "url('src/images/bg-card-front.png')",
    }
  },
  plugins: [],
 }
}