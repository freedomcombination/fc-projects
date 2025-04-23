import { getNextConfig } from '@fc/intl/next.config'
import { deviceSizes, imageSizes } from '@fc/ui/lib/breakpoints'

import { withPayload } from '@payloadcms/next/withPayload'

const hostname = process.env.NEXT_PUBLIC_SERVER_URL?.split('://')[1] as string
const protocol = process.env.NEXT_PUBLIC_SERVER_URL?.split('://')[0] as 'http' | 'https'

const nextConfig = getNextConfig({
  images: {
    deviceSizes: deviceSizes,
    imageSizes: imageSizes,
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
        hostname: 'stichtingsanat.nl',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname,
        pathname: '/**',
        protocol,
      },
    ],
  },
  transpilePackages: ['@fc/ui'],
})

export default withPayload(nextConfig)
