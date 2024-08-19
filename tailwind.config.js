/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#242424",
        primary: "#a62626",
        secondary: "#4b5563",
        textPrimary: "#F2F2F2",
        textSecondary: "#9B9B9B"
      }
    },
  },
  plugins: [],
};
