/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    colors: {
      primary: '#5A4CFF',
      second:'#DEE5FF',
      black: '#333333',

    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ]
}
