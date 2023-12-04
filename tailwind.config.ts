/** @type {import('tailwindcss').Config} */

// color palette: https://colormagic.app/palette/jZnSMXhB3wLejgFrPBSv
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      red: "#ff0000",
      primary: "#9b5de5",
      secondary: "#f15bb5",
      tertiary: "#fee440",
      quaternary: "#00bbf9",
      quinary: "#00f5d4",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      }
    }
  },
  plugins: [],
}