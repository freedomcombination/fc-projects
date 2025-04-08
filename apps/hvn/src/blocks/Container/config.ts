import type { Block } from 'payload'

import { NonContainerBlockConfigs } from '../common/non-container-block-list'

export const Container: Block = {
  fields: [
    {
      defaultValue: 'container',
      name: 'type',
      options: [
        {
          label: 'Section',
          value: 'section',
        },
        {
          label: 'Container',
          value: 'container',
        },
      ],
      required: true,
      type: 'select',
    },
    {
      blocks: NonContainerBlockConfigs,
      name: 'blocks',
      type: 'blocks',
    },
  ],
  interfaceName: 'Container',
  slug: 'container',
}
