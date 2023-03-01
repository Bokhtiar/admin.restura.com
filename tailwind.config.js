/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': "1536px"
    },
     container: {
      center: true,
      padding: "1rem"
     },
    extend: {},
    daisyui: {
      themes: false,
    },
  },
  plugins: [require('daisyui')],
}
