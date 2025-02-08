import { getNextConfig } from '@fc/intl/next.config'

const nextConfig = getNextConfig({
  images: {
    remotePatterns: [
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
    ],
  },
  transpilePackages: ['@fc/ui'],
})

export default nextConfig
