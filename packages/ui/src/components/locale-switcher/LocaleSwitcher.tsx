'use client'

import { usePathname, useRouter } from '@fc/intl/navigation'
import { type AppLocale, routing } from '@fc/intl/routing'
import { Button } from '@fc/ui/base/button'

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
    <div className="inline-flex shadow-md rounded-lg overflow-hidden" role="group">
      {routing.locales.map((locale) => {
        const className = clsx(
          locale === currentLocale ? 'bg-blue-500 text-gray-50' : 'bg-gray-200 text-gray-800 hover:bg-blue-200',
          'p-1',
        )

        return (
          <Button className={className} key={locale} onClick={() => onSelectChange(locale)}>
            &nbsp;{locale.toUpperCase()}&nbsp;
          </Button>
        )
      })}
    </div>
  )
}
