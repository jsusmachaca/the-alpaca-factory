import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
    https: true,
  },
  integrations: [tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
});