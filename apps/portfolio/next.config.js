const withPlugins = require("next-compose-plugins");
const nextBuildId = require("next-build-id");
const nextPreact = require("next-plugin-preact");
const nextOptimizedClassnames = require("next-optimized-classnames");

/** @type {import('next').NextConfig} */
const config = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
};

module.exports = module.exports = withPlugins([nextPreact, nextOptimizedClassnames], config);
