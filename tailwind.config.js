/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        neutral1: '#2D2926',
        neutral2: '#63666A',
        neutral3: '#75787B',
        neutral4: '#BBBCBC',
        neutral5: 'rgba(217, 217, 214, 0.6)',
      },
    },
  },
  plugins: [],
}

