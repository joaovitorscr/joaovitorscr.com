// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://joaovitorscr.com",
  server: {
    port: Number(process.env.PORT) || 4173,
  },
  fonts: [
    { provider: fontProviders.google(), name: "Funnel Sans", cssVariable: "--font-funnel-sans", weights: ["300 700"] },
    { provider: fontProviders.google(), name: "Funnel Display", cssVariable: "--font-funnel-display", weights: ["300 800"] },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
