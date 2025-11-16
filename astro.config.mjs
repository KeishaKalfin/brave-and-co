// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [solid(), tailwind()],
  image: {
    domains: ['localhost']
  },
  // GitHub Pages configuration
  site: 'https://keishakalfin.github.io',
  // base path removed - site will be served from root
});
