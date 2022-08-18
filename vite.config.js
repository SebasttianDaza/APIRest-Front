import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "@Components": path.resolve(__dirname, "./src/Components"),
    "@Hooks": path.resolve(__dirname, "./src/Hooks"),
    "@Pages": path.resolve(__dirname, "./src/Page"),
    "@Services": path.resolve(__dirname, "./src/Services"),
    "@Utils": path.resolve(__dirname, "./src/Utils"),
  },
  //Config .env
});
