/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Nunito Sans, sans-serif',
    },
    height: {
      screen: '100dvh',
    },
  },
  plugins: [],
};
