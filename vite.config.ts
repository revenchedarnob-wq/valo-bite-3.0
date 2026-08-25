import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Vercel serves the app at the domain root, so the default base is "/".
// `VITE_BASE` can override in CI/local when the app is hosted under a
// subpath (e.g. GitHub Pages) — the router basename follows BASE_URL.
const base = process.env.VITE_BASE ?? "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
