import { CollapsibleField, JSONField } from 'payload'

export const cssLayout = ({ label, name }: { name: string; label: string }) => {
  const layoutConfig: JSONField = {
    admin: {
      components: {
        Field: {
          path: '@/fields/css/layout/LayoutComponent#LayoutComponent',
        },
      },
    },
    label,
    name,
    type: 'json',
  }

  return layoutConfig
}
