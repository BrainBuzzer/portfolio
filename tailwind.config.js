module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter var, sans-serif", { fontFeatureSettings: '"salt"' }],
    },
  },
};
