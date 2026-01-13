/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // REQUIRED for Cloudflare Pages
  },
};

module.exports = nextConfig;