/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream:   "#f9ecdbff",
        primary: "#3cadbaff",
        accent:  "#f3d0a0ff"
      }
    }
  },
  plugins: []
};
