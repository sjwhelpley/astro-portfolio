import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    icon({
      include: {
        mdi: ["github", "link-variant"],
        "line-md": ["sun-rising-loop", "moon-alt-loop"],
      },
    }),
  ],
  site: "https://samwhelpley.me",
  output: "static",
});
