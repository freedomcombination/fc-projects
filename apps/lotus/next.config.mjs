import { getNextConfig } from '@fc/intl/next.config'

const nextConfig = getNextConfig({
  transpilePackages: ['@fc/ui'],
})

export default nextConfig
