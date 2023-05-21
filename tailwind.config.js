/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '7rem',
        xl: '8rem',
        '2xl': '9rem',
      },
    },
    fontFamily: {
     'sans': 'Roboto, sans-serif',
    },
    extend: {
      colors: {
       "background": "#1C1C1C",
      },
    },
  },
  plugins: [],
}

