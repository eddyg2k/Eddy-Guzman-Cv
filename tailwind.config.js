/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      colors: {
        ink: "#050607",
        accent: "#6ef3ff",
        highlight: "#7a5cff"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(110,243,255,0.05), transparent 25%), radial-gradient(circle at 80% 0%, rgba(122,92,255,0.06), transparent 30%)"
      }
    }
  },
  plugins: []
};
