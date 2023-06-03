import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'Api', replacement: path.resolve(__dirname, 'src/api') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'modules', replacement: path.resolve(__dirname, 'src/modules') },
      { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
})
