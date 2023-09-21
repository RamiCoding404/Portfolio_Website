/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      signature: ["Great Vibes"],
    },
    screens: {
      sm: "640px", // Small screens
      md: "768px", // Medium screens
      lg: "1025px", // Large screens
      xl: "1280px", // desktop screens
    },
  },

  plugins: [],
};
