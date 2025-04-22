import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'

export const Announcements: CollectionConfig = {
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'publishedAt', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'description',
      required: true,
      type: 'textarea',
    },
    {
      name: 'image',
      relationTo: 'media',
      type: 'upload',
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'content',
      required: true,
      type: 'richText',
    },

    {
      admin: {
        position: 'sidebar',
      },
      name: 'publishedAt',
      type: 'date',
    },
  ],
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  slug: 'announcements',
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
    maxPerDoc: 20,
  },
}
