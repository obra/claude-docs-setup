// ABOUTME: Configuration file for Vite bundler with React plugin and test setup
// ABOUTME: Sets up the development server, build options, and testing environment

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  }
})