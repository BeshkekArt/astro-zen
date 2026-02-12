// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://el-beshuele-portfolio-on-astro.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
