import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Proxies requests from /api to your Appwrite server
      "/api": {
        target: "https://cloud.appwrite.io", // Appwrite server
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Rewrite path if needed
      },
    },
  },
});
