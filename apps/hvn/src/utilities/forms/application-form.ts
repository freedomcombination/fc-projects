import { RequiredDataFromCollectionSlug } from 'payload'

// RequiredDataFromCollectionSlug<'forms'>

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
      blockName: 'dateOfBirth',
      blockType: 'text',
      label: 'Date of Birth',
      name: 'dateOfBirth',
      required: true,
    },
    {
      blockName: 'fullName',
      blockType: 'text',
      label: 'Full Name',
      name: 'fullName',
      required: true,
    },
    {
      blockName: 'email',
      blockType: 'email',
      label: 'Email',
      name: 'email',
    },
    {
      blockName: 'phone',
      blockType: 'text',
      label: 'Phone',
      name: 'phone',
    },
    {
      blockName: 'city',
      blockType: 'text',
      label: 'City',
      name: 'city',
      required: true,
    },
    {
      blockName: 'parentFullName',
      blockType: 'text',
      label: "Parent's Full Name",
      name: 'parentFullName',
    },
    {
      blockName: 'parentPhone',
      blockType: 'text',
      label: "Parent's Phone Number",
      name: 'parentPhone',
    },
    {
      blockName: 'parentEmail',
      blockType: 'email',
      label: "Parent's Email",
      name: 'parentEmail',
    },
    {
      blockName: 'event',
      blockType: 'select',
      label: 'Event',
      name: 'event',
      options: [{ label: 'Harmonie van Nederland - Amsterdam', value: 'hvn_amsterdam' }],
      required: true,
    },
    {
      blockName: 'message',
      blockType: 'textarea',
      label: 'Message',
      name: 'message',
      required: true,
    },
    {
      blockName: 'participationType',
      blockType: 'select',
      label: 'Type of Participation',
      name: 'participationType',
      options: [
        { label: 'Song', value: 'song' },
        { label: 'Performance', value: 'performance' },
        { label: 'Poetry', value: 'poetry' },
        { label: 'Stand-up', value: 'standup' },
        { label: 'Instrument', value: 'instrument' },
        { label: 'Dance', value: 'dance' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
    {
      blockName: 'otherParticipationType',
      blockType: 'text',
      label: 'Other Participation Type (if selected)',
      name: 'otherParticipationType',
    },
  ],
  submitButtonLabel: 'Apply',
  title: 'Application Form',
}
