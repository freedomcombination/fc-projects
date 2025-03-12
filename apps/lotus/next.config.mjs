import { getNextConfig } from '@fc/intl/next.config'

const nextConfig = getNextConfig({
  images: {
    remotePatterns: [
      {
        hostname: 'sarkac.org',
        pathname: '/**',
        protocol: 'https',
      }
    ],
  },
  transpilePackages: ['@fc/ui'],
})

export default nextConfig
