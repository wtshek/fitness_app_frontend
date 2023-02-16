/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3772ff",
        transparent: "rgba(0, 0, 0, 0.65)",
        gray: "#808080",
      },
      height: {
        mobileBottomNavBar: "56px",
      },
      padding: {
        mobileBottom: "56px",
      },
    },
  },
  plugins: [],
};
