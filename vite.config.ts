import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.GITHUB_ACTIONS ? '/Portfolio/' : '/',
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
    server: {
        port: 3000,
        host: true,
    },
});
