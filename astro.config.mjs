import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import expressiveCode from "astro-expressive-code";

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nize.ph",
  integrations: [
    expressiveCode({
      themes: ["everforest-light", "everforest-dark"],
      themeCssSelector: (theme) => `.${theme.type}`,
    }),
    mdx(),
    sitemap(),
    solidJs(),
  ],
  output: "static",
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
