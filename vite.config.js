import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(__dirname, './node_modules/react/jsx-runtime'),
    },
  },
  css: {
    // 1. Instructs the minifier to strip invalid IE codes instead of crashing
    lightningcss: {
      errorRecovery: true
    },
    preprocessorOptions: {
      scss: {
        quietDeps: true, 
        silenceDeprecations: ['import', 'global-builtin', 'if-function', 'color-functions'] 
      }
    }
  }
})
