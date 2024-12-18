import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://htwk.midnightdust.eu/",
  compressHTML: true,
  integrations: [mdx(), 
    icon(), 
    tailwind({
      applyBaseStyles: false
    }),
    alpinejs(),
  ],
});