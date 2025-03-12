import { getNextConfig } from '@fc/intl/next.config'

import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = getNextConfig({
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        pathname: '/**',
        protocol: 'http',
      },
      {
        hostname: 'images.unsplash.com',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname: 'scontent.fgrq1-1.fna.fbcdn.net',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname: 'stichtingsanat.nl',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
  transpilePackages: ['@fc/ui'],
})

export default withPayload(nextConfig)
