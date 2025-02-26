

export const seed = async (payload: any) => {
  console.log('Seeding formbuilder collection...');

  const formEntries = [
    {
      confirmationMessage: {
        root: {
          children: [
            {
              children: [
                { text: 'Thank you for reaching out!', type: 'text', version: 1 }
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1
            }
          ],
          type: 'root',
          version: 1
        }
      },
      confirmationType: 'message',
      fields: [
        {
          blockType: 'text',
          label: 'Name',
          name: 'name',
          required: true
        },
        {
          blockType: 'email',
          label: 'Email',
          name: 'email',
          required: true
        },
        {
          blockType: 'textarea',
          label: 'Message',
          name: 'message',
          required: true
        }
      ],
      submitButtonLabel: 'Send',
      title: 'Contact Form'
    },
    {
      confirmationMessage: {
        root: {
          children: [
            {
              children: [
                { text: 'Application submitted successfully!', type: 'text', version: 1 }
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1
            }
          ],
          type: 'root',
          version: 1
        }
      },
      confirmationType: 'message',
      fields: [
        {
          blockType: 'text',
          label: 'Full Name',
          name: 'fullName',
          required: true
        },
        {
          blockType: 'text',
          label: 'Date of Birth',
          name: 'dateOfBirth',
          required: true
        },
        {
          blockType: 'text',
          label: 'Phone',
          name: 'phone',
          required: true
        },
        {
          blockType: 'select',
          label: 'Event',
          name: 'event',
          options: [
            { label: 'Harmonie van Nederland - Amsterdam', value: 'Harmonie van Nederland - Amsterdam' }
          ],
          required: true
        },
        {
          blockType: 'select',
          label: 'City',
          name: 'city',
          options: [
            { label: 'Amsterdam', value: 'Amsterdam' },
            { label: 'Den Haag', value: 'Den Haag' },
            { label: 'Noord Brabant', value: 'Noord Brabant' }
          ],
          required: true
        },
        {
          blockType: 'textarea',
          label: 'Message',
          name: 'message',
          required: true
        },
        {
          blockType: 'checkbox',
          label: 'Accept Terms',
          name: 'acceptTerms',
          required: true
        }
      ],
      submitButtonLabel: 'Apply',
      title: 'Application Form'
    }
  ];

  for (const entry of formEntries) {
    await payload.create({
      collection: 'forms',
      data: entry,
    });
  }

  console.log('Seeding completed.');
};
