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
      blockType: 'checkbox',
      label: 'I am under 18 years old',
      name: 'isUnder18',
      required: true,
    },
    {
      blockType: 'textarea',
      label: 'Parent Information (Required for applicants under 18)',
      name: 'parentInfoMessage',
    },
    {
      blockType: 'text',
      label: "Parent's Full Name",
      name: 'parentFullName',
    },
    {
      blockType: 'text',
      label: "Parent's Phone Number",
      name: 'parentPhone',
    },
    {
      blockType: 'email',
      label: "Parent's Email",
      name: 'parentEmail',
    },
    {
      blockType: 'text',
      label: 'Phone',
      name: 'phone',
    },
    {
      blockType: 'select',
      label: 'Event',
      name: 'event',
      options: [{ label: 'Harmonie van Nederland - Amsterdam', value: 'hvn_amsterdam' }],
      required: true,
    },
    {
      blockType: 'text',
      label: 'City',
      name: 'city',
      required: true,
    },
    {
      blockType: 'textarea',
      label: 'Message',
      name: 'message',
      required: true,
    },
  ],
  submitButtonLabel: 'Apply',
  title: 'Application Form',
}
