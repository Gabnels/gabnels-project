import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gabnels-project.vercel.app", // dominio real para SEO
  integrations: [tailwind(), mdx(), sitemap()],
});
