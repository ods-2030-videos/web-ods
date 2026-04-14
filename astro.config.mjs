// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ods-2030-videos.github.io',
  base: '/web-ods/',
  build: {
    inlineStylesheets: 'always',
  },
});
