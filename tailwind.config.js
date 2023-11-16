/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayishblue': 'hsl(229, 8%, 60%)',
        'verydarkblue': 'hsl(229, 31%, 21%)',
        'softblue': 'hsl(231, 69%, 60%)',
        'softred': 'hsl(0, 94%, 66%)'
      },  
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  },
  plugins: [],
}