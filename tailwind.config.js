module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
  theme: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glitch": "glitch 1s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter var", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        cyan: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          700: "#0e7490",
        },
        indigo: {
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          700: "#4338ca",
        },
        emerald: {
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          700: "#047857",
        },
        amber: {
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          700: "#b45309",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          900: "#134e4a",
        },
        space: {
          950: '#030303', // Deepest black
          900: '#0a0a0a',
          800: '#1a1a1a',
        },
        neon: {
          cyan: '#00f3ff',
          purple: '#bd00ff',
          green: '#0aff00',
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme("colors.neon.cyan"), 0 0 20px theme("colors.neon.cyan")',
        'neon-purple': '0 0 5px theme("colors.neon.purple"), 0 0 20px theme("colors.neon.purple")',
      }
  },
};
