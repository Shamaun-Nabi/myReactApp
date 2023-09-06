/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake",'lofi'],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require('flowbite/plugin')],
}

