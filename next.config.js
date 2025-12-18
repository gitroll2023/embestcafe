/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.namu.wiki'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
