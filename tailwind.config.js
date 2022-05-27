const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('./galleon-theme.js')],
  theme: {
    extend: {},
  },
  plugins: [],
}
