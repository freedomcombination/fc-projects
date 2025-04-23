import type { NextConfig } from 'next'

import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        pathname: '/**',
        protocol: 'http',
      },
    ],
  },
}

export const getNextConfig = (config = nextConfig) => withNextIntl(config)
