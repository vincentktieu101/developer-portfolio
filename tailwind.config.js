/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {},
      keyframes: {},
      backgroundColor: {
        // ziprecruiter
        "#277f6a": "#277f6a",
        "#b2e522": "#b2e522",
        // syntiant
        "#162c44": "#162c44",
        // ucsb
        "#00539b": "#00539b",
        "#ffc323": "#ffc323",
        // ugig
        "#1976d2": "#1976d2",
        "#46bdef": "#46bdef",
      },
    },
  },
  plugins: [],
};
