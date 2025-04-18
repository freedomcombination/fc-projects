import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  access: {
    read: () => true,
  },
  auth: false,
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    // Author
    {
      hasMany: false,
      name: 'author',
      relationTo: 'users',
      type: 'relationship',
    },
  ],
  slug: 'blogs',
}
