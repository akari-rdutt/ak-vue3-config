// vite.config.js
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import registerGlobalComponents from './entry';

export default defineConfig({
  plugins: [Vue()], // Use the Vue plugin for Vite
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Ensure Vue runtime is not duplicated in chunks
          vue: ['vue'],
        },
      },
    },
  },
  // resolve: {
  //   alias: {
  //     // Define any aliases here if needed
  //     // '@': resolve(__dirname, 'src'),
  //   },
  // },
  // Register global components
  configureServer: [
    ({ app }) => {
      registerGlobalComponents(app);
    },
  ],
});
