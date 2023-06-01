/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        laptop: '1024px',
        tablet: '640px',
      },
    },
  },
  plugins: [],
};
