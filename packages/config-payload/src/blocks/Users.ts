import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    // Email added by default
    // Add more fields as needed
  ],
  slug: 'users',
}
