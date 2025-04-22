/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')], // ✅ NativeWind preset
  theme: {
    extend: {
      colors: {
        primary: '#3a95df',
        secondary: '#FF6347',
        accent: '#FFD700',
        background: '#1d1e20',
        textcolor: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
