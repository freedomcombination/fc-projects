import type { Meta, StoryObj } from '@storybook/react'

import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  args: {
    backgroundImage: 'https://sarkac.org/wp-content/uploads/2023/08/dayanisma.png',
    subtitle:
      'Topluluğumuzu güçlendirmek ve daha iyi bir gelecek inşa etmek için birlikte çalışalım. Her destek, yarınlarımız için umut olur.',
    title: 'Destek Ver, Fark Yarat',
  },
  component: Hero,
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {}

export const HalfHeight: Story = {
  args: {
    className: 'h-[50vh]',
  },
}
