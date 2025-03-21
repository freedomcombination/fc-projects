import { CollapsibleField } from 'payload'

export const cssSize = ({ label, name }: { name: string; label: string }) => {
  const sizeConfig: CollapsibleField = {
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        admin: {
          components: {
            Field: {
              path: '@/fields/css/size/SizeComponent#SizeComponent',
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

  return sizeConfig
}
