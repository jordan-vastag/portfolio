// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      darkblue: '#2d4e73',
      lightblue: '#325c73',
      darkgreen: '#2e5959',
      lightgreen: '#3c6960',
    },
  },
  plugins: [],
};
