import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';
import progress from 'vite-plugin-progress'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), circleDependency({}), progress()],
  resolve: {
    alias: {
      '@/app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@/features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@/shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      '@/pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@/widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
      '@/entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
      '~variables': fileURLToPath(new URL('./src/app/style/variables.scss', import.meta.url))
    }
  }
});
