import type { Meta, StoryObj } from '@storybook/react'

import { Container } from './Container'

const meta: Meta<typeof Container> = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className: 'bg-red-100',
    spacing: 'lg',
  },
  component: Container,
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {}

export const Fluid: Story = {
  args: {
    fluid: true,
  },
}

export const Medium: Story = {
  args: {
    spacing: 'md',
  },
}

export const Small: Story = {
  args: {
    spacing: 'sm',
  },
}
