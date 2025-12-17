/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#22C55E",
        dark: "#0F172A",
        light: "#FFFFFF",
        surface: "#1E293B", // A slightly lighter dark for cards etc.
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

