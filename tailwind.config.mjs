/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],

  theme: {
    extend: {
      /* =========================
         TOKENS DE COLOR (SYSTEM)
         ========================= */
      colors: {
        brand: {
          primary: "#2563eb",
          primaryHover: "#1d4ed8",

          secondary: "#111827",
          muted: "#6b7280",

          soft: "#f9fafb",
          card: "#ffffff",

          border: "#e5e7eb",
          accent: "#3b82f6",
        },
      },

      /* =========================
         TIPOGRAFÍA (CONTROL GLOBAL)
         ========================= */
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Merriweather",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },

      /* =========================
         SOMBRAS SISTEMA UI
         ========================= */
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.05)",
        soft: "0 2px 10px rgba(0,0,0,0.04)",
      },

      /* =========================
         BORDER RADIUS SYSTEM
         ========================= */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      /* =========================
         TRANSITIONS SYSTEM
         ========================= */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};
