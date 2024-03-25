/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#787976',
        'strong': '#484a46',
        'muted': '#c1cace',
        'brand': '#cda433',
        'brandreverse': '#b81918',
        'brand-strong': '#eabe38',
        'brandreverse-strong': '#7f1710',
      }
    },
  },
  plugins: [],
}

