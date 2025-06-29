import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from 'path'


export default defineConfig({
  base: "/",
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      // Optional: Add aliases if needed
      "react-toastify": path.resolve(__dirname, "node_modules/react-toastify"),
    },
  },
  optimizeDeps: {
    include: ["react-toastify"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
