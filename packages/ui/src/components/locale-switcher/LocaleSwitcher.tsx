'use client'

import { usePathname, useRouter } from '@fc/intl/navigation'
import { type AppLocale, routing } from '@fc/intl/routing'

import clsx from 'clsx'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'

export const LocaleSwitcher = () => {
  const router = useRouter()

  const pathname = usePathname()
  const params = useParams()
  const currentLocale = useLocale()

  function onSelectChange(locale: AppLocale) {
    router.replace(
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      // @ts-expect-error
      { params, pathname },
      { locale },
    )
  }

  return (
    <div className="flex items-center space-x-2">
      {routing.locales.map((locale) => {
        const className = clsx(
          locale === currentLocale ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800',
          'w-8 p-2',
        )

        return (
          <button className={className} key={locale} onClick={() => onSelectChange(locale)}>
            {locale}
          </button>
        )
      })}
    </div>
  )
}
