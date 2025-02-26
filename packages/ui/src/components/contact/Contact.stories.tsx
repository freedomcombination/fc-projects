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
    address: '',
    className: '',
    email: '',
    phone: '',
    title: '',
  },
}
