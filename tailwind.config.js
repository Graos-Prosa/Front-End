/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",

        texto: {
          principal: "var(--cor-texto-principal)",
          secundaria: "var(--cor-texto-secundaria)",
          inversa: "var(--cor-texto-inversa)",
        },

        borda: "var(--cor-borda)",

        tema: {
          principal: "var(--cor-tema-principal)",
          secundaria: "var(--cor-tema-secundaria)",
        },
      },
    },
  },
  plugins: [],
}