import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/sunil-portfolio/",
  server: {
    port: 3000,
  },
});