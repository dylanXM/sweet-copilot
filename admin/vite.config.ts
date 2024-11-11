import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts(),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/common'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.tsx', '.jsx', '.js', '.ts', '.json'] // 导入时想要省略的扩展名列表
  },
});
