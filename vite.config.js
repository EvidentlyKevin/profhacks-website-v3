import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Match your GitHub Pages repo name
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
