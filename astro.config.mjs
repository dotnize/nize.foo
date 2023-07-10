import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: { theme: "dark-plus" },
  },
  site: "https://nize.foo",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== "https://nize.foo/rss.xml/" && page !== "https://nize.foo/msg/",
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
  ],
  output: "hybrid",
  adapter: vercel(),
});
