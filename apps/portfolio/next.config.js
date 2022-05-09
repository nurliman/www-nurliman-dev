const withPlugins = require("next-compose-plugins");
const nextBuildId = require("next-build-id");
const nextPreact = require("next-plugin-preact");
const nextOptimizedClassnames = require("next-optimized-classnames");
const nextBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import('next').NextConfig} */
const config = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
};

module.exports = withPlugins(
  [
    nextPreact,
    nextOptimizedClassnames,
    [nextBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
  ],
  config,
);
