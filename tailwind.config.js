/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'Light-Pink': 'hsl(275, 100%, 97%)',
        'Grayish-Purple': 'hsl(292, 16%, 49%)',
        'Dark-Purple': 'hsl(292, 42%, 14%)'
      },
      backgroundImage: {
        'background-mobile': "url('./src/assets/images/background-pattern-mobile.svg')",
        'background-desktop': "url('./src/assets/images/background-pattern-desktop.svg')"
      },
      fontFamily: {
        'Work-Sans': ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}