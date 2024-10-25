import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";
import compression from "vite-plugin-compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    compression({
     
      algorithm: "gzip", 
      threshold: 10240, 
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      asset: path.resolve(__dirname, "./src/assets"),
      public: path.resolve(__dirname, "./src/public"),
      "*": path.resolve(__dirname, "./"),
    },
  },
});
