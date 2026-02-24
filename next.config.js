/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.weatherapi.com', 'newsapi.org'],
  },
};

module.exports = nextConfig;
