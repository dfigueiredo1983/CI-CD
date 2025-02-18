import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jestPlugin from 'vite-plugin-jest';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jestPlugin()],
})
