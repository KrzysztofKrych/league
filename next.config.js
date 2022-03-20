/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    BACKEND_API_URL: process.env.BACKEND_API_URL
  },
};

module.exports = nextConfig;
