// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",       // 👉 escaneia páginas
    "./components/**/*.{js,ts,jsx,tsx}"   // 👉 escaneia componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF88",     // ✅ Verde Neon
        secondary: "#00B2FF",   // ✅ Azul Claro Tech
        dark: "#0A0A0A",        // ✅ Fundo principal
        light: "#F5F5F5",       // ✅ Texto claro 
        zincOverlay: "rgba(24,24,27,0.6)" // ✅ Zinco com transparência
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],                    // ✅ Fonte padrão
        grotesk: ["'Space Grotesk'", "sans-serif"],       // ✅ Nova fonte tech/minimal
      },
      boxShadow: {
        neon: "0 0 6px #00FF88, 0 0 12px #00FF88",         // ✅ Efeito glow verde neon
      }
    },
  },
  plugins: [],
}
