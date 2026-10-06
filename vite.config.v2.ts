import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Standalone build for the dedicated BeFi v2 website (root-level routes).
// Outputs to dist-v2 so the main build (dist) stays untouched.
export default defineConfig({
  server: {
    host: "::",
    port: 8081,
    hmr: { overlay: false },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-v2",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.v2.html"),
    },
  },
});
