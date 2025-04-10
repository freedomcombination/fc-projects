import type { Block } from 'payload'

import { blockConfigs } from './config'
import { ContainerBlock } from './ContainerBlock'

export const SectionBlock: Block = {
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
      name: 'image',
      relationTo: 'media',
      type: 'upload',
    },
    {
      // For now class name is used to apply background image
      // TODO: Use predefined background colors
      name: 'background',
      type: 'text',
    },
    {
      blocks: [...blockConfigs, ContainerBlock],
      name: 'blocks',
      type: 'blocks',
    },
  ],
  interfaceName: 'Section',
  slug: 'section',
}
