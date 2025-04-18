import { Suspense } from 'react'

import { Button } from '@fc/ui/base/button'
import { Contact } from '@fc/ui/components/contact'
import { LocaleSwitcher } from '@fc/ui/components/locale-switcher'
import { ModeToggle } from '@fc/ui/components/mode-toggle'

import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('HomePage')
  const contactInfo = {
    address: 'Merkez Mah. Destek Cad. No:1, İstanbul',
    email: 'info@lotusvdmedia.nl',
    phone: '+90 (212) 555 0000',
    title: 'Bize Ulaşın',
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-red-500 dark:text-red-100">{t('title')}</h1>
        <Button size="sm">Button</Button>

        <Suspense>
          <ModeToggle />
          <LocaleSwitcher />
          <Contact
            address={contactInfo.address}
            email={contactInfo.email}
            phone={contactInfo.phone}
            title={contactInfo.title}
          />
        </Suspense>
      </div>
    </div>
  )
}
