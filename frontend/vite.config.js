import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/",
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "react-toastify": path.resolve(__dirname, "node_modules/react-toastify"),
    },
  },
  optimizeDeps: {
    include: ["react-toastify"],
  },
});
