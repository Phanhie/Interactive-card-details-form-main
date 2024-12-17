/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        '8h': '730px'
      },
      width: {
        '4h': '500px',
        '85' : '350px'
      },
      colors:{
        'd-violet': 'hsl(278, 68%, 11%)'
      },
      fontFamily:{
        'display': ['Space Grotesk']
      },
      backgroundImage: {
        'hero-mobile': "url('src/images/bg-main-mobile.png')",
      },
      margin:{
        '22': '85px'
      }
  },
  plugins: [],
 }
}