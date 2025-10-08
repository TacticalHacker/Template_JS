/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    includeSource: ['src/**/*.{js,ts}'],
    exclude: ['node_modules', 'dist'],
  },
});
