import { CollapsibleField } from 'payload'

export const cssColor = ({
  forText = false,
  label,
  name,
  sampleText,
  solidOnly = false,
}: {
  name: string
  label: string
  forText?: boolean
  sampleText?: string
  solidOnly?: boolean
}) => {
  const colorConfig: CollapsibleField = {
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        admin: {
          components: {
            Field: {
              clientProps: {
                forText,
                sampleText,
                solidOnly,
              },
              path: '@/fields/css/color/ColorComponent#ColorComponent',
            },
          },
        },
        label,
        name,
        type: 'json',
      },
    ],
    label,
    type: 'collapsible',
  }

  return colorConfig
}
