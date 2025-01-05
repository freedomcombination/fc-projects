import sharedConfig from '@fc/config-tailwind'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: ['./src/**/*.tsx', ...sharedConfig.content],
  prefix: 'ui-',
  presets: [sharedConfig],
}

export default config
