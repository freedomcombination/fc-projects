import type { Meta, StoryObj } from '@storybook/react'

import { Container } from './Container'

const meta: Meta<typeof Container> = {
  args: {
    spacing: 'lg',
  },
  component: Container,
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {}
