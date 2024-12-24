/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        positivusGreen: "#B9FF66",
        positivusGrey: "#F3F3F3",
        positivusDarkGrey: "#898989",
        positivusDark: "#191A23"
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      spaceGrotesk: "'Space Grotesk', sans-serif"
    }
  },
  plugins: [],
}

