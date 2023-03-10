/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ['images.pexels.com'],
   
  },
  trailingSlash: true,
}

module.exports = nextConfig
