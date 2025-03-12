import type { Meta, StoryObj } from '@storybook/react'

import Hero from './Hero'

const meta: Meta<typeof Hero> = {
  component: Hero,
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    image: 'https://sarkac.org/wp-content/uploads/2023/08/dayanisma.png',
    subtitle:
      'Topluluğumuzu güçlendirmek ve daha iyi bir gelecek inşa etmek için birlikte çalışalım. Her destek, yarınlarımız için umut olur.',
    title: 'Destek Ver, Fark Yarat',
  },
}
