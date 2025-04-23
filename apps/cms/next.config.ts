import { deviceSizes, imageSizes } from '@fc/ui/lib/breakpoints'

import type { NextConfig } from 'next'

import { withPayload } from '@payloadcms/next/withPayload'

const hostname = process.env.NEXT_PUBLIC_SERVER_URL?.split('://')[1] as string
const protocol = process.env.NEXT_PUBLIC_SERVER_URL?.split('://')[0] as 'http' | 'https'

const nextConfig: NextConfig = {
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
        hostname,
        pathname: '/**',
        protocol,
      },
    ],
  },
}

export default withPayload(nextConfig)
