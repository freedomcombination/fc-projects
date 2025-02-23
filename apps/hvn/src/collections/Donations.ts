import type { CollectionConfig } from 'payload'

import { metadata } from '@payloadcms/next/layouts'

export const Donations: CollectionConfig = {
  access: {
    create: ({ req }) => {
      return req.credentials === 'same-origin'
    },
    delete: () => false,
    read: () => true,
    update: () => false,
  },
  fields: [
    {
      name: 'amount',
      required: true,
      type: 'number',
    },
    {
      name: 'currency',
      required: true,
      type: 'text',
    },
    {
      name: 'paymentType',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'stripePaymentIntentId',
      required: true,
      type: 'text',
    },
    {
      name: 'date',
      required: true,
      type: 'date',
    },
    {
      name: 'campaign',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
  slug: 'donations',
}
