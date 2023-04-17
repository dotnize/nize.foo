import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: { theme: "dark-plus" }
  },
  site: "https://nize.ph",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    solidJs(),
    prefetch()
  ],
  output: "server",
  adapter: vercel()
});
