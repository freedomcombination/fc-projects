import { getNextConfig } from '@fc/intl/next.config'

const nextConfig = getNextConfig({
  images: {
    remotePatterns: [
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
