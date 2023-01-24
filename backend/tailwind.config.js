/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#5A4CFF',
      second:'#DEE5FF',
      black: '#333333',
      white: '#ffffff',
      gray: '#696969',
      darkBlue:"#26458c",
      lightBlue:"#426bb6",
      highlightBlue:"#658ce40f",
      black:"#000000",
      bgBlue:"#f8f8fa",
      white:"#ffffff",
      brfBlack:"#888fa6",
      red :'#ff0033',
      borderColor:"#dde3f1",
      success:"#4CA6A8",
      link: "#006fff",
      gray:"#888FA6",
      lightGrey:"#f3f4f6",
      green :"#33BB7C",
      lightGreen :"#4CA6A8",
      grey:"#9ca3af",
      pink: "#ff4969",
      gold: "#eec103",
      skyblue: "#24A0ED",
      greensubmit: "#4CAF50"
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
  ]
}
