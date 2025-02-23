import type { CollectionConfig } from 'payload'

import { metadata } from '@payloadcms/next/layouts'

export const Donations: CollectionConfig = {
  access: {
    create: ({ req }) => {
      return req.credentials === 'same-origin'
    },
    delete: () => false,
    read: () => true,
    update: ({ req }) => {
      return req.credentials === 'same-origin'
    },
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
      options: [
        {
          label: 'One-Time',
          value: 'one-time',
        },
        {
          label: 'Monthly',
          value: 'monthly',
        },
      ],
      type: 'select',
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
    {
      defaultValue: 'pending', // Varsayılan olarak 'pending' olsun
      name: 'status',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Paid',
          value: 'paid',
        },
      ],
      type: 'select',
    },
  ],
  slug: 'donations',
}
