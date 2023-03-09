/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: { "100": "#f6f8fa", "200": "rgba(246, 248, 250, 0.8)" },
        gray: {
          "100": "#fafbfc",
          "200": "#16191c",
          "300": "rgba(22, 25, 28, 0.12)",
          "400": "rgba(22, 25, 28, 0.24)",
          "500": "rgba(22, 25, 28, 0.4)",
          "600": "rgba(22, 25, 28, 0.5)",
        },
        darkgray: "#a0abb6",
        mediumslateblue: "#6565f2",
        silver: { "100": "#bfcad4", "200": "rgba(191, 202, 212, 0.06)" },
        dodgerblue: { "100": "#3087fd", "200": "rgba(48, 135, 253, 0.08)" },
        white: "#fff",
      },
      fontFamily: { poppins: "Poppins", "crimson-pro": "'Crimson Pro'"},
      borderRadius: { small: "1px", base: "10px", large: "23px" },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.88rem",
      base: "1rem",
      lg: "1.13rem",
      xl: "1.5rem",
    },
  },
  plugins: [],
}
