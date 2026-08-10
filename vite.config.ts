import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite nu citește singur variabila PORT: pornește pe 5173 și, dacă e ocupat, „alunecă"
// tăcut pe 5174/5175. Când portul e alocat din exterior, asta rupe preview-ul, care
// rămâne să asculte pe portul alocat. Deci: îl citim explicit și, când vine din
// mediu, îl impunem cu strictPort — mai bine o eroare clară decât un port greșit.
const port = Number(process.env.PORT) || 5173

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port,
    strictPort: Boolean(process.env.PORT),
  },
})
