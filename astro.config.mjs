import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
  site: "https://htwk.midnightdust.eu/",
  compressHTML: true,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false
  }), AstroPWA({
    mode: "production",
    base: "/",
    scope: "/",
    includeAssets: ["favicon.png"],
    registerType: "autoUpdate",
    manifest: {
      name: "HubTWK – Tools für Studierende",
      short_name: "HubTWK",
      theme_color: "#121212",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/404",
      globPatterns: ["*.js"],
    },
    devOptions: {
      enabled: false,
      navigateFallbackAllowlist: [/^\/404$/],
      suppressWarnings: true,
    },
  }),],
});