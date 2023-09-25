/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#343045',
        primary: '#C0B7E8',
        secondary: '#E8AA42',
        darkText: '#510020',
        dark: '#18191a',
        primaryDark: '#3a3b3c',
      },
    },
  },
  plugins: [],
};
