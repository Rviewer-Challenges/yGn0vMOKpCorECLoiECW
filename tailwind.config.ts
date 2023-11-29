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
      primary: "#f9a9a9",
      secondary: "#fdd4af",
      tertiary: "#fffaad",
      quaternary: "#a2d8c4",
      quinary: "#7ed3cc",
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