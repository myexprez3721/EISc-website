/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B91C1C',
        'primary-dark': '#7F1D1D',
        'primary-light': '#DC2626',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
