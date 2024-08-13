import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      },
    },
  },
=======
>>>>>>> c8f6d2bdc3e56f3c16ce23f05d9b1113232c8f5a
})
