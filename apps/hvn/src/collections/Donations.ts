import type { CollectionConfig } from 'payload'

export const Donations: CollectionConfig = {
  slug: 'donations',
  access: {
    create: ({ req }) => {
      return req.credentials === "same-origin"
    },
    read: () => true,
    update: ({ req }) => {
      return req.credentials === "same-origin"
    },
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
      type: 'select',
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
    {
      name: 'status',
      type: 'select',
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
      defaultValue: 'pending', // Varsayılan olarak 'pending' olsun
    },
  ],
}
