import { getNextConfig } from '@fc/intl/next.config'
import { deviceSizes, imageSizes } from '@fc/ui/lib/breakpoints'

import { withPayload } from '@payloadcms/next/withPayload'

// Parse NEXT_PUBLIC_SERVER_URL safely using the URL constructor so we don't
// accidentally create an invalid remotePattern entry when the env var is
// missing or malformed.
let hostname: string | undefined
let protocol: 'http' | 'https' | undefined
try {
  if (process.env.NEXT_PUBLIC_SERVER_URL) {
    const parsed = new URL(process.env.NEXT_PUBLIC_SERVER_URL)
    hostname = parsed.hostname
    protocol = (parsed.protocol.replace(':', '') as 'http' | 'https') || undefined
  }
} catch {
  // Ignore malformed env var and don't add the runtime remote pattern.
  hostname = undefined
  protocol = undefined
}

const nextConfig = getNextConfig({
  images: {
    deviceSizes: deviceSizes,
    imageSizes: imageSizes,
    qualities: [50, 80, 90, 100],
    // Build remotePatterns array and only include the runtime-derived pattern
    // when NEXT_PUBLIC_SERVER_URL is set and properly parsed.
    remotePatterns: (() => {
      const patterns: Array<{ hostname: string; pathname: string; protocol?: string }> = [
        { hostname: 'localhost', pathname: '/**', protocol: 'http' },
        { hostname: 'images.unsplash.com', pathname: '/**', protocol: 'https' },
        { hostname: 'stichtingsanat.nl', pathname: '/**', protocol: 'https' },
      ]

      if (hostname && protocol) {
        // Only push a pattern when we have a valid hostname and protocol
        // (both strings). This avoids Next complaining about invalid
        // remotePatterns entries at startup.
        patterns.push({ hostname, pathname: '/**', protocol })
      }

      return patterns
    })(),
  },
  reactCompiler: true,
  transpilePackages: ['@fc/ui'],
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
})

export default withPayload(nextConfig)
