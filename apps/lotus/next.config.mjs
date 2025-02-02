import { getNextConfig } from '@fc/intl/next.config'

import path from 'path'

const nextConfig = getNextConfig({
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  output: 'standalone',
  transpilePackages: ['@fc/ui'],
})

export default nextConfig
