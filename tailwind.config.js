/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-light": "var(--green-light)",
        "green-deep": "var(--green-deep)",
        "green-yellow": "var(--green-yellow)",
      },
    },
  },
  plugins: [],
};
