import type { Meta, StoryObj } from '@storybook/react'

import { Contact } from './Contact'

const meta: Meta<typeof Contact> = {
  component: Contact,
}

export default meta

type Story = StoryObj<typeof Contact>

export const Default: Story = {
  // TODO: Fill args
  args: {
    address: 'Merkez Mah. Destek Cad. No:1, İstanbul',
    email: 'info@lotusvdmedia.nl',
    phone: '+90 (212) 555 0000',
    title: 'Bize Ulaşın',
  },
}
