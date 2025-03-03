/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4F46E5",
          DEFAULT: "#4338CA",
          dark: "#3730A3",
        },
        dark: {
          100: "#1E1E1E",
          200: "#141414",
          300: "#2D2D2D",
          400: "#3D3D3D",
        },
        // color1: "#06B6D4",
        // color2: "#F97316",
        // color3: "#EAB308",
        chart: {
          color1: "#06B6D4",
          color2: "#F97316",
          color3: "#EAB308",
        },
      },
      boxShadow: {
        "dark-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.35)",
        "dark-md": "0 4px 6px -1px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
