import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // 🔥 Aggiunto per Vercel
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src", // Usa la sintassi corretta per Vite
    },
  },
  build: {
    // Rimuovi la configurazione manualChunks
    rollupOptions: {
      output: {
        // Rimuovendo manualChunks Vite gestisce automaticamente il code splitting
      },
    },
  },
});
