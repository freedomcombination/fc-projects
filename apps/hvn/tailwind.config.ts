import sharedConfig from '@fc/config-tailwind'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.tsx'],
  presets: [sharedConfig],
}

export default config
