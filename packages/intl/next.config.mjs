import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
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
