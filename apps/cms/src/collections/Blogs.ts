import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title_en',
      type: 'text',
    },
    {
      name: 'title_nl',
      type: 'text',
    },
    {
      name: 'title_tr',
      type: 'text',
    },
  ],
}
