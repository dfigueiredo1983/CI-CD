// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import vitePluginJest from 'vite-plugin-jest';

// export default defineConfig({
//   plugins: [
//     react(),
//     vitePluginJest(), // Adicione o plugin do Jest
//   ],
// });

const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
});