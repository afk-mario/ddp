const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://detrasdelpixel.com',
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/acerca-de/', changefreq: 'daily', priority: 0.9 },
    { url: '/blog/', changefreq: 'daily', priority: 0.8 },
  ],
});

module.exports = sitemap;
