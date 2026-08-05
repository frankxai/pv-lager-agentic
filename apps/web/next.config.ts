import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.pvlager.com', 'www.solarcarport.tech', 'images.unsplash.com'],
  },
};

export default nextConfig;
