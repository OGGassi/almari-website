// @ts-check
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      'scontent.cdninstagram.com',
      'instagram.com',
      'cdn.instagram.com',
      'ziv-lichi-gassner.storage.googleapis.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'theme'],
  },
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true,
      },
    ];
  },
  // Enable SWC minification for improved performance
  swcMinify: true,
};

module.exports = nextConfig;