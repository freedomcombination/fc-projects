import { getNextConfig } from '@fc/intl/next.config'

const nextConfig = getNextConfig({
  transpilePackages: ['@fc/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fgrq1-1.fna.fbcdn.net',
        pathname: '/**',
      }
    ],
  }
})

export default nextConfig
