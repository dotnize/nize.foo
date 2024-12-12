import type { AstroIntegration } from "astro";
import { cp, readdir } from "node:fs/promises";
import * as path from "node:path";

// TODO: temporary fix: https://github.com/withastro/adapters/issues/445#issuecomment-2526327882
export function sitemapFix(): AstroIntegration {
  return {
    name: "sitemap-fix",
    hooks: {
      "astro:build:done": async ({ logger }) => {
        const buildLogger = logger.fork("sitemap-fix");
        buildLogger.info("Copying xml files from dist to vercel out");
        try {
          const files = await readdir("./dist/client");
          const xmlFiles = files.filter(
            (file) =>
              path.extname(file).toLowerCase() === ".xml" &&
              path.basename(file).toLowerCase().startsWith("sitemap")
          );
          buildLogger.info(xmlFiles.join(", "));
          for (const file of xmlFiles) {
            const sourcePath = path.join("./dist/client", file);
            const destPath = path.join("./.vercel/output/static", file);
            await cp(sourcePath, destPath);
          }
          buildLogger.info("All XML files copied successfully");
        } catch (error) {
          buildLogger.error(`Error copying files: ${error}`);
        }
      },
    },
  };
}
