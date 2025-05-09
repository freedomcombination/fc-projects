import { RequiredDataFromCollectionSlug } from 'payload'

export const contactForm: RequiredDataFromCollectionSlug<'forms'> = {
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
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  },
  confirmationType: 'message',
  fields: [
    {
      blockName: 'name',
      blockType: 'text',
      label: 'Name',
      name: 'name',
      required: true,
    },
    {
      blockName: 'email',
      blockType: 'email',
      label: 'Email',
      name: 'email',
      required: true,
    },
    {
      blockName: 'message',
      blockType: 'textarea',
      label: 'Message',
      name: 'message',
      required: true,
    },
  ],
  submitButtonLabel: 'Send',
  title: 'Contact Form',
}
