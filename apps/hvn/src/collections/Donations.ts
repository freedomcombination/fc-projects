import { metadata } from '@payloadcms/next/layouts'
import type { CollectionConfig } from 'payload'

export const Donations: CollectionConfig = {
  slug: 'donations',
  access: {
    create: ({ req }) => {
      return req.credentials === "same-origin"
    },
    read: () => true,
    update: () => false,
    delete: () => false, 
  },
  fields: [
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'currency',
      type: 'text',
      required: true,
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
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
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
}
