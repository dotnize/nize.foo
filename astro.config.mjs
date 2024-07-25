import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://nize.foo",
  integrations: [
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
