/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "112.5": "450px", // Custom width untuk w-[450px]
      },
      backgroundImage: {
        
      },
    },
  },
  plugins: [],
}
