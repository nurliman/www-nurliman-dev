const withPreact = require("next-plugin-preact");
const nextBuildId = require("next-build-id");

/** @type {import('next').NextConfig} */
const config = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
};

module.exports = withPreact(config);
