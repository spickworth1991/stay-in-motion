// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
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
