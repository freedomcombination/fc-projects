import { getNextConfig } from '@fc/intl/next.config'

const hostname = process.env.NEXT_PUBLIC_SERVER_URL?.split('://')[1] as string
const protocol = process.env.NEXT_PUBLIC_SERVER_URL?.split('://')[0] as 'http' | 'https'

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
      {
        hostname,
        pathname: '/**',
        protocol,
      },
    ],
  },
  transpilePackages: ['@fc/ui'],
})

export default nextConfig
