// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://joaovitorscr.com",
  server: {
    port: Number(process.env.PORT) || 4173,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
