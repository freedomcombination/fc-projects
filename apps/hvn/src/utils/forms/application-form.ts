import { RequiredDataFromCollectionSlug } from 'payload'

export const applicationForm: RequiredDataFromCollectionSlug<'forms'> = {
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
      label: 'Province',
      name: 'province',
      options: [
        { label: 'Drenthe', value: 'Drenthe' },
        { label: 'Flevoland', value: 'Flevoland' },
        { label: 'Friesland', value: 'Friesland' },
        { label: 'Gelderland', value: 'Gelderland' },
        { label: 'Groningen', value: 'Groningen' },
        { label: 'Limburg', value: 'Limburg' },
        { label: 'Noord Brabant', value: 'Noord Brabant' },
        { label: 'Noord Holland', value: 'Noord Holland' },
        { label: 'Overijssel', value: 'Overijssel' },
        { label: 'Utrecht', value: 'Utrecht' },
        { label: 'Zeeland', value: 'Zeeland' },
        { label: 'Zuid Holland', value: 'Zuid Holland' },
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
}
