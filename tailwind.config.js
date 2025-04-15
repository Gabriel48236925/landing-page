/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF88",     // Verde Neon
        secondary: "#00B2FF",   // Azul Claro Tech
        dark: "#0A0A0A",        // Fundo principal
        light: "#F5F5F5",       // Texto claro (se usar)
        zincOverlay: "rgba(24,24,27,0.6)" // Zinco com transparência
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 6px #00FF88, 0 0 12px #00FF88", // Glow verde neon
      }
    },
  },
  plugins: [],
};
