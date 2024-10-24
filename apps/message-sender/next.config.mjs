import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // Temporarily ignore Next.js ESLint errors.
    // This project uses Biome for linting instead of ESLint.
    // Re-enable the Next.js linter when Next.js supports custom linters
    // (in this case, Biome).
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
