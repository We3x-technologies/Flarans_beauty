/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FFF9FF',
          100: '#E7BDE6',
          200: '#E7BDE6',
          300: '#B53FBB',
          400: '#912FB0',
          500: '#791B70',
          600: '#530978',
          700: '#530978'
        },
        cream: '#FFF9FF',
        ink: '#351132',
        primary: '#791B70',
        'primary-dark': '#530978',
        'primary-light': '#912FB0',
        accent: '#B53FBB',
        'accent-soft': '#E7BDE6',
        'text-muted': '#6F536D',
        gold: '#B53FBB',
        goldLight: '#E7BDE6'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Playfair Display', 'serif']
      },
      boxShadow: {
        soft: '0 16px 45px rgba(83, 9, 120, 0.14)',
        card: '0 10px 30px rgba(121, 27, 112, 0.10)'
      }
    }
  },
  plugins: []
};
