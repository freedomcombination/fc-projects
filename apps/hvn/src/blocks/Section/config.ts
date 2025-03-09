import type { Block } from 'payload'

export const Section: Block = {
  fields: [
    {
      defaultValue: 'hero',
      name: 'sectionName',
      options: [
        {
          label: 'Hero',
          value: 'hero',
        },
        {
          label: 'About',
          value: 'about',
        },
      ],
      required: true,
      type: 'select',
    },
  ],
  interfaceName: 'SectionBlock',
  slug: 'section',
}
