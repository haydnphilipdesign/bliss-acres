/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A6741', // Sage green
        secondary: '#8E7F7F', // Warm gray
        accent: '#D4AF37', // Gold
        background: '#F5F5F5', // Light gray
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};