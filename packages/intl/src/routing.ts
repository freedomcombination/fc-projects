import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // Used when no locale matches
  defaultLocale: 'en',

  // A list of all locales that are supported
  locales: ['en', 'tr', 'nl'],
})

export type AppLocale = (typeof routing.locales)[number]
