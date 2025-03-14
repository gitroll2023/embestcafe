/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'i.namu.wiki'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;
