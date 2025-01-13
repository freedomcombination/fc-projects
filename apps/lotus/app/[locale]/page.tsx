import { Suspense } from 'react'

import { Button } from '@fc/ui/base/button'
import { LocaleSwitcher } from '@fc/ui/components/locale-switcher'
import { LoginForm } from '@fc/ui/components/login-form'
import '@fc/ui/globals.css'
import { ModeToggle } from '@fc/ui/components/mode-toggle'

import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold dark:text-red-100 text-red-500">{t('title')}</h1>
        <Button size="sm">Button</Button>
        <LoginForm />
        <Suspense fallback={null}>
          <ModeToggle />
          <LocaleSwitcher />
        </Suspense>
      </div>
    </div>
  )
}
