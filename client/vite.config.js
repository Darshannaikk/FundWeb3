import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['@safe-globalThis/safe-ethers-adapters'],
    },
  },
};

// vite.config.js
