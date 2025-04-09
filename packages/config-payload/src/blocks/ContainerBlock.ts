import type { Block } from 'payload'

import { blockConfigs } from './config'

export const ContainerBlock: Block = {
  fields: [
    {
      name: 'spacing',
      options: [
        {
          label: 'Small',
          value: 'sm',
        },
        {
          label: 'Medium',
          value: 'md',
        },
        {
          label: 'Large',
          value: 'lg',
        },
      ],
      type: 'select',
    },
    {
      name: 'fluid',
      type: 'checkbox',
    },
    {
      blocks: blockConfigs,
      name: 'blocks',
      type: 'blocks',
    },
  ],
  interfaceName: 'Container',
  slug: 'container',
}
