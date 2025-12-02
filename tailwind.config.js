/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          wedding: {
            primary: '#5D7052',
            secondary: '#D4A373',
            rose: '#E6B8B8',
            sage: '#CCD5AE',
            cream: '#FAF9F6',
            paper: '#FDFCF8',
          }
        },
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['"Lato"', 'sans-serif'],
        },
        backgroundImage: {
          'forest-pattern': "url('/src/assets/noise.png')",
        }
      },
    },
    plugins: [],
  }