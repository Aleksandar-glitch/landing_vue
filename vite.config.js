import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Set up '@' to refer to the 'src' directory
    },
  },
  server: {
    port: 8080,
    host: "0.0.0.0",
  },
  plugins: [vue()],
});
