/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      'xs': '350px',
      's': '430px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1560px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        navy: '#071a31',
        lnavy: '#0a2647',
        blue: '#205295',
        lblue: '#2C74B3',
        lslate: '#ccd6f6',
        lgreen: '#64ffda',
        lblack: '#313131',
        gold: '#fad25a',
        dgold: '#504107'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
