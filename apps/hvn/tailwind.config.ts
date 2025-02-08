import type { Config } from 'tailwindcss'
import sharedConfig from '@fc/config-tailwind'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/app/**/*.tsx', ...sharedConfig.content],
  presets: [sharedConfig],
}

export default config
