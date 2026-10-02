import { defineConfig } from 'astro/config';

export default defineConfig({
  // [TODO] set the production URL per site (used for canonical and Open Graph URLs).
  site: 'https://example.com',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  image: { layout: 'constrained', responsiveStyles: false },
});
