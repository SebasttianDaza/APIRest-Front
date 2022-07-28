import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "@Components": path.resolve(__dirname, "./src/Components"),
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "src/main.jsx",
      output: {
        format: "cjs",
      },
    },
  },
});
