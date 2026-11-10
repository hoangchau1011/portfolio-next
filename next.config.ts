import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Đã xoá 2 dòng cacheComponents và partialPrefetching
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;