'use client'

import * as React from 'react'

import { usePathname, useRouter } from '@fc/intl/navigation'
import { AppLocale } from '@fc/intl/routing'

import { Globe } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const languages = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
  { code: 'nl', label: 'Nederlands' },
]

export function LanguageSwitcher() {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 p-2" size="lg" variant="outline">
          <Globe className="h-4 w-4" />
          {currentLocale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white p-2 gap-2 text-xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            className="cursor-pointer p-1"
            key={lang.code}
            onClick={() => onSelectChange(lang.code as AppLocale)}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
