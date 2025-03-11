import { getNextConfig } from '@fc/intl/next.config'

import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = getNextConfig({
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  output: 'standalone',
})

export default nextConfig
