import { RequiredDataFromCollectionSlug } from 'payload'

export default {
  confirmationMessage: {
    root: {
      children: [
        {
          children: [{ text: 'Application submitted successfully!', type: 'text', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
        },
      ],
      type: 'root',
      version: 1,
    },
  },
  confirmationType: 'message',
  fields: [
    {
      blockType: 'text',
      label: 'Full Name',
      name: 'fullName',
      required: true,
    },
    {
      blockType: 'text',
      label: 'Date of Birth',
      name: 'dateOfBirth',
      required: true,
    },
    {
      blockType: 'text',
      label: 'Phone',
      name: 'phone',
      required: true,
    },
    {
      blockType: 'select',
      label: 'Event',
      name: 'event',
      options: [{ label: 'Harmonie van Nederland - Amsterdam', value: 'Harmonie van Nederland - Amsterdam' }],
      required: true,
    },
    {
      blockType: 'select',
      label: 'City',
      name: 'city',
      options: [
        { label: 'Amsterdam', value: 'Amsterdam' },
        { label: 'Den Haag', value: 'Den Haag' },
        { label: 'Noord Brabant', value: 'Noord Brabant' },
      ],
      required: true,
    },
    {
      blockType: 'textarea',
      label: 'Message',
      name: 'message',
      required: true,
    },
    {
      blockType: 'checkbox',
      label: 'Accept Terms',
      name: 'acceptTerms',
      required: true,
    },
  ],
  submitButtonLabel: 'Apply',
  title: 'Application Form',
} as unknown as RequiredDataFromCollectionSlug<'forms'>
