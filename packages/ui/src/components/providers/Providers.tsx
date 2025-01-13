'use client'

import * as React from 'react'

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { QueryProvider } from './QueryProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
    >
      <QueryProvider>{children}</QueryProvider>
    </NextThemesProvider>
  )
}
