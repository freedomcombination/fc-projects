import type { Block } from 'payload'

import { componentOptions } from './componentList'

export const Component: Block = {
  fields: [
    {
      label: 'Component (this is not implemented yet.)',
      name: 'componentPath',
      options: [{ label: 'None', value: 'none' }, ...componentOptions],
      required: true,
      type: 'select',
    },
  ],
  interfaceName: 'ComponentBlock',
  slug: 'component',
}
