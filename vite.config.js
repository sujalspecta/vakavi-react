import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';
export default defineConfig({ plugins: [react()],
    resolve: {
    alias: {
      // Forces everything in your project to use your root React installations
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(__dirname, './node_modules/react/jsx-runtime'),
    },
  },
     css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, 
        silenceDeprecations: ['import', 'global-builtin', 'if-function', 'color-functions'] 
      }
    }
  }
 });
