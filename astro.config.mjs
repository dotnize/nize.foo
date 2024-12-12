import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";

import vercel from "@astrojs/vercel";
import { sitemapFix } from "./temp-sitemap-fix";

// https://astro.build/config
export default defineConfig({
  site: "https://nize.foo",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    expressiveCode({
      themes: ["everforest-light", "everforest-dark"],
      themeCssSelector: (theme) => `.${theme.type}`,
    }),
    mdx(),
    sitemap(),
    solidJs(),
    sitemapFix(), // TODO: temporary fix: https://github.com/withastro/adapters/issues/445#issuecomment-2526327882
  ],
  output: "static",
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
