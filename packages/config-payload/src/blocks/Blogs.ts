import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    // Author
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
  ],
}
