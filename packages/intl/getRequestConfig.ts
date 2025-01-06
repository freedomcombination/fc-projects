import { getRequestConfig } from 'next-intl/server'

import { routing } from './src/i18n/routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`@fc/config/messages/${locale}.json`)).default,
  }
})
