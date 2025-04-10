import type { Block } from 'payload'

import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const FormBlock: Block = {
  fields: [
    {
      name: 'form',
      relationTo: 'forms',
      required: true,
      type: 'relationship',
    },
    {
      label: 'Enable Intro Content',
      name: 'enableIntro',
      type: 'checkbox',
    },
    {
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] })]
        },
      }),
      label: 'Intro Content',
      name: 'introContent',
      type: 'richText',
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'Form Blocks',
    singular: 'Form Block',
  },
  slug: 'formBlock',
}
