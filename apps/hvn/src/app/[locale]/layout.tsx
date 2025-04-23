import { AppLocale, routing } from '@fc/intl/routing'
import { Toaster } from '@fc/ui/base/sonner'
import { Providers } from '@fc/ui/components/providers'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Geist } from 'next/font/google'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

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
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`${fontSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  )
}
