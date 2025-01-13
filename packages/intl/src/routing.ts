import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'tr', 'nl'],

  // Used when no locale matches
  defaultLocale: 'en',
})

export type AppLocale = (typeof routing.locales)[number]
