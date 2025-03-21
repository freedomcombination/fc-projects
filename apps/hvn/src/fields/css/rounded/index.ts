import { CollapsibleField } from 'payload'

export const cssRounded = ({ label, name }: { name: string; label: string }) => {
  const roundedConfig: CollapsibleField = {
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        admin: {
          components: {
            Field: {
              path: '@/fields/css/rounded/RoundedComponent#RoundedComponent',
            },
          },
        },
        label,
        name,
        type: 'text',
      },
    ],
    label,
    type: 'collapsible',
  }

  return roundedConfig
}
