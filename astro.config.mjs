// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jhon-tajumbina.vercel.app',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // '/404' no existe como ruta real y '/' es un redirect noindex: fuera del sitemap
      filter: (page) =>
        !page.includes('/404') && page !== 'https://jhon-tajumbina.vercel.app/',
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
  fonts: [
    {
      name: 'Sora',
      cssVariable: '--font-sora',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
    {
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      provider: fontProviders.google(),
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
    {
      name: 'Cinzel',
      cssVariable: '--font-cinzel',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
  ],
});
