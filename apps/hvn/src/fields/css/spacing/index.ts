import { CollapsibleField } from 'payload'

export const cssSpacing = ({ color = false, label, name }: { name: string; label: string; color?: boolean }) => {
  const spacingConfig: CollapsibleField = {
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        admin: {
          components: {
            Field: {
              clientProps: {
                color,
              },
              path: '@/fields/css/spacing/SpacingComponent#SpacingComponent',
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

  return spacingConfig
}
