import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: { themes: { light: "vitesse-light", dark: "vitesse-dark" } },
  },
  site: "https://nize.foo",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
  ],
  output: "hybrid",
  adapter: vercel({ functionPerRoute: false }),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
