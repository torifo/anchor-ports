import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://torifo.github.io",
  base: "/anchor-ports",
  vite: {
    plugins: [tailwindcss()],
  },
});
