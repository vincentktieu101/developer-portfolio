/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        expandDrawer: "expandDrawer 300ms ease-in",
        closeDrawer: "closeWidth 300ms ease-in",
      },
      keyframes: {
        expandDrawer: {
          "0%": { width: "0" },
          "100%": { width: "60%" },
        },
      }
    },
  },
  plugins: [],
};
