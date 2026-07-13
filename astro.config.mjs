// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://adelinasahlean.com',
  // About and Contact now live as sections on the one-page home
  redirects: {
    '/about': '/#about',
    '/contact': '/#contact',
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
