/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-1': '#AD2330',
        'primary-2': '#B82B37',
        'primary-3': '#C93845',
        'primary-4': '#D84A59',
        'primary-5': '#E86270',
        'secondary-1': '#01A6D8',
        'secondary-2': '#32BCE5',
        'secondary-3': '#45E2ED',
        'secondary-4': '#65F4F6',
        'secondary-5': '#8BFFF6',
        'accent-1': '#EDC22C',
        'accent-2': '#FFD741',
        'accent-3': '#FFE257',
        'accent-4': '#FFE66F',
        'accent-5': '#FFEE88',
        'neutral-1': '#2D2926',
        'neutral-2': '#63666A',
        'neutral-3': '#75787B',
        'neutral-4': '#BBBCBC',
        'neutral-5': '#D9D9D6',
    },
    width: {
      'card-500': '500px',
    },
    height: {
      'card-565': '565px',
    },
    borderRadius: {
      'border-20': '20px',
    },
  },
},
  plugins: [],
}

