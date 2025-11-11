/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#d72142",
        "scandary-red": "#a5112c",
        "brand-dark": "#1a202c",
        "brand-light": "#f7fafc",
        "brand-blue": "#2b6cb0",
        "brand-accent": "#2c7a7b",
        overlay: "rgba(255, 255, 255, 0.1)",
      },
      // Ensure the heading font is defined correctly
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        heading: ['"Merriweather"', "serif"],
      },
    },
  },
  plugins: [],
};
