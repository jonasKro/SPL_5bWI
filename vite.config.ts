import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://10.115.1.41:8055',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/items/BWI_Schueler')
      }
    }
  }
});