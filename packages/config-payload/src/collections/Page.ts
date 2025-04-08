import { publishedOnly } from '@fc/config-payload/access/publishedOnly'
import { slugField } from '@fc/config-payload/fields/slug'

import type { CollectionConfig } from 'payload'

import { FormBlock } from './Form'

export const Page: CollectionConfig = {
  access: {
    read: publishedOnly,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      tabs: [
        {
          fields: [
            {
              blocks: [FormBlock],
              name: 'layout',
              required: true,
              type: 'blocks',
            },
          ],
          label: 'Content',
        },
      ],
      type: 'tabs',
    },
    slugField(),
  ],
  slug: 'pages',
  versions: {
    drafts: true,
  },
}
