export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B81", // rosado principal
        secondary: "#F9E0E0",
        darkBlue: "#002B5B",
      },
      backgroundImage: {
        "main-bg": "url('/src/assets/fondo.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
