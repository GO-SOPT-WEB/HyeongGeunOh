import image from '@rollup/plugin-image';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), image()],
  // base: '/HyeongGeunOh/',
});
