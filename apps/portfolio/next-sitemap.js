/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: process.env.SITE_URL || "https://nurliman.dev",
  generateRobotsTxt: true,
};

module.exports = nextSitemapConfig;
