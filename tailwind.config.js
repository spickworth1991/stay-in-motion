/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        cream:   '#f9ecdbff',
        primary: '#3cadbaff',
        accent:  '#f3d0a0ff',
      },
    },
  },
  plugins: [],
}
