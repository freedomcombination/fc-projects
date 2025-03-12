import { getNextConfig } from '@fc/intl/next.config'

const nextConfig = getNextConfig({
  images: {
    remotePatterns: [
      // TODO: Remove this
      {
        hostname: 'sarkac.org',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname: 'localhost',
        pathname: '/**',
        protocol: 'http',
      },
    ],
  },
  transpilePackages: ['@fc/ui'],
})

export default nextConfig
