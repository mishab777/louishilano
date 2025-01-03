/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bag-for-her.jpg')",
        'hero-pattern-2': "url('./src/assets/shoe-for-him.jpg')",
        'hero-cart': "url('./src/assets/cart-cover.webp')",
      }
    },
  },
  plugins: [],
}