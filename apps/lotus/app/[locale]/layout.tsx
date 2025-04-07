import { AppLocale, routing } from '@fc/intl/routing'
import { Providers } from '@fc/ui/components/providers'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Geist } from 'next/font/google'
import { notFound } from 'next/navigation'

import '@fc/ui/globals.css'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: AppLocale }>
}>) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
