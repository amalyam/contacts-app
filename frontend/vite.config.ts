import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "module";

const requireFunc = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [requireFunc("tailwindcss"), requireFunc("autoprefixer")],
    },
  },
});
