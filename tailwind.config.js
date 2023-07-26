/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   './index.html',
  //   './src/main.tsx',
  //   'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  // ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee', 'cursive'],
        bungeeInline: ['Bungee Inline', 'cursive'],
        blackOpsOne: ['Black Ops One', 'cursive'],
        genos: ['Genos', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
}
