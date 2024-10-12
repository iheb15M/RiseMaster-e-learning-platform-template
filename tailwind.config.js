/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'primary': '#673AB7',
      'secondary': '#3C2F80',
      'accent': {
        'light': '#DDD7FF',
        default: '#BBAFFF',
      },
      'gray':{
        'light': '#F7F7F7',
        default: '#616161',
      },
      'green': '#1BC573'
    },
    extend: {},
  },
  plugins: [],
}

