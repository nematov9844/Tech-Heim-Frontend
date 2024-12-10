/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'nr': '300px', // yangi kichik breakpoint
        'xs': '480px', // yangi kichik breakpoint
        '3xl': '1600px', // katta ekranlar uchun
        'tall': { 'raw': '(min-height: 800px)' } // baland ekranlar uchun maxsus qoida
      },
    },
  },
  plugins: [],
}