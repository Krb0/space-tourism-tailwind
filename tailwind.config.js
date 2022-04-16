module.exports = {
  theme: {
    screens: {
      sm: "340px",
      md: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        dark: "#0B0D17",
        violet: "#D0D6F9",
        lightgray: { 100: "#888888", 200: "#cacaca" },
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
