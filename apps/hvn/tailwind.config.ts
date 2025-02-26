import sharedConfig from '@fc/config-tailwind'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './src/app/[locale]/**/*.tsx',
    './src/components/**/*.tsx',
    '../../packages/ui/src/base/**/*.{ts,tsx}',
    '../../packages/ui/src/components/**/*.{ts,tsx}',
    '../../packages/ui/src/blocks/**/*.{ts,tsx}',
  ],
  presets: [sharedConfig],
}

export default config
