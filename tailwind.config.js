/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'custom-gray': '#405D72',
        'navy' : '#204051',
        'night' : '#3B6978',
        'winter' : '#84A9AC',
        'mint' : '#CAE8D5'
      }
    },
  },
  plugins: [],
}

