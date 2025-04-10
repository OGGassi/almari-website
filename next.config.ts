// @ts-check
import { fileURLToPath } from 'url';
import path from 'path';
import i18nConfig from './next-i18next.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: i18nConfig.i18n,
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

export default nextConfig;