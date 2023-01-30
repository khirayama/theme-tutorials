/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false,
  content: [
    "./layout/*.liquid",
    "./templates/*.{liquid, json}",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./assets/*.{liquid, js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
