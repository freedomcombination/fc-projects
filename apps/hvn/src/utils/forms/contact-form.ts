import { RequiredDataFromCollectionSlug } from 'payload'

export default {
  confirmationMessage: {
    root: {
      children: [
        {
          children: [{ text: 'Thank you for reaching out!', type: 'text', version: 1 }],
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
      label: 'Name',
      name: 'name',
      required: true,
    },
    {
      blockType: 'email',
      label: 'Email',
      name: 'email',
      required: true,
    },
    {
      blockType: 'textarea',
      label: 'Message',
      name: 'message',
      required: true,
    },
  ],
  submitButtonLabel: 'Send',
  title: 'Contact Form',
} as unknown as RequiredDataFromCollectionSlug<'forms'>
