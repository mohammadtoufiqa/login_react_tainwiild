/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0f172a',
        aurora: '#4f46e5',
        mist: '#818cf8',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        neon: '0 25px 50px -12px rgba(129, 140, 248, 0.35)',
      },
    },
  },
  plugins: [],
};
