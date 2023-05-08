/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs':  {'max': '768px' }  
      },
      borderRadius: {
        'lg': '15px', // se aplica a rounded-tl-lg, rounded-tr-lg, rounded-bl-lg
        'xl': '110px', // se aplica a rounded-br-xl
      },
      fontFamily: {
        PoppinsBold: ['Poppins-Bold', 'sans-serif'],
        PoppinsBoldItalic: ['Poppins-BoldItalic', 'sans-serif'],
        PoppinsExtraBold: ['Poppins-ExtraBold', 'sans-serif'],
        PoppinsExtraBoldItalic: ['Poppins-ExtraBoldItalic', 'sans-serif'],
        PoppinsItalic: ['Poppins-Italic', 'sans-serif'],
        PoppinsRegular: ['Poppins-Regular', 'sans-serif']
      },
      letterSpacing: {
        widest: '.20em',
      },
      fontSize: {
        sm: '0.70em',
        texto: '2rem'
      },
      colors: {
        purpura: 'hsl(259, 100%, 65%)',
        lightred: 'hsl(0, 100%, 67%)',
        white: 'hsl(0, 0%, 100%)',
        offWhite: 'hsl(0, 0%, 94%)',
        lightGrey: 'hsl(0, 0%, 86%)',
        smokeyGrey: 'hsl(0, 1%, 44%)',
        offBlack: 'hsl(0, 0%, 8%)'
      }, animation: {
        read: 'move 1s  alternate infinite',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}