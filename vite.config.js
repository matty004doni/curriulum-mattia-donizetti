import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // 🔥 Aggiunto per Vercel
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // manualChunks permette di separare il codice in più file per migliorare il caricamento
        manualChunks(id) {
          // Se il modulo è react, separalo in un chunk
          if (id.includes('node_modules/react')) {
            return 'react';
          }
          if (id.includes('node_modules/react-dom')) {
            return 'react-dom';
          }

          // Se il modulo è un'altra libreria esterna, crea un chunk separato
          if (id.includes('node_modules/')) {
            const moduleName = id.split('node_modules/')[1].split('/')[0];
            return `vendor-${moduleName}`;
          }

          // Se il modulo è nella cartella components, crea un chunk separato
          if (id.includes('src/components/')) {
            const componentName = id.split('src/components/')[1].split('/')[0];
            return `components-${componentName}`;
          }

          // Puoi anche separare altre sezioni specifiche della tua app, se necessario
        }
      }
    }
  }
});
