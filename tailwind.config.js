/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#141413',
          light: '#1C1C1A',
          card: '#181816',
          deep: '#0E0E0D',
        },
        cream: {
          DEFAULT: '#F7F5F0',
          light: '#FAF9F6',
          warm: '#EFECE6',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#D4B475',
          dark: '#A8843E',
          muted: '#CCA459',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

