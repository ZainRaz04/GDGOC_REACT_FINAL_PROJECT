/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the design
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        // Adding Epilogue font
        epilogue: ["Epilogue", "sans-serif"],
      },
      fontWeight: {
        // Custom font weights
        medium: 500,
        bold: 700,
      },
      screens: {
        // Custom breakpoints
        mobile: "375px",
        desktop: "1440px",
      },
      spacing: {
        // Additional spacing utilities for finer control
        18: "4.5rem", // Example: custom spacing
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      boxShadow: {
        // Adding custom shadows for polished UI
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
