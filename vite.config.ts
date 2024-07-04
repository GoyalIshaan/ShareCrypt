// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      overrideConfigFile: './.eslintrc.cjs',
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
      configFile: './.eslintrc.json', // Explicitly specify the path to the ESLint config
    }),
  ],
  css: {
    postcss: './postcss.config.js',
  },
  esbuild: false, // Disable esbuild for TS, we use SWC instead
});
