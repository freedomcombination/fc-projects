import sharedConfig from '@fc/config-tailwind'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/app/**/*.tsx', ...sharedConfig.content],
  presets: [sharedConfig],
}

export default config
