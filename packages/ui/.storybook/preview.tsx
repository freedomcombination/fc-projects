import React from 'react'

import type { Preview, ReactRenderer } from '@storybook/react'

import { Geist } from 'next/font/google'

const GeistFont = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

import '@fc/ui/globals.css'

import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: 'light',
      themes: {
        dark: 'dark',
        light: 'light',
      },
    }),
    (Story) => (
      <main className={GeistFont.className}>
        <Story />
      </main>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
