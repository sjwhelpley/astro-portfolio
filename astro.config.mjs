import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), icon()],
  site: "https://samwhelpley.me",
  output: "server",
  adapter: vercel()
});