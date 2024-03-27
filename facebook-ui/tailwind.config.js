/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-facebook": "#1877F2",
        "gray-facebook": "#F0F2F5",
        "green-facebook": '#36A320',
      },
      spacing: {
        500: "500px",
        300: "300px",
      },
    },
  },
  plugins: [],
};
