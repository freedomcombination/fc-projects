import React from 'react'

import { useTranslations } from 'next-intl'
import { SupportBank } from './support-bank'
import { SupportStripe } from '../donation/stripe-form'

export const Support = () => {
  const t = useTranslations()

  return (
    <section className="py-16 bg-gray-100" id="support">
      <div className="container max-w-6xl mx-auto px-4 py-8">

        <h2 className="text-4xl font-bold mb-4">{t('Header.support')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='space-y-2'>
            <SupportBank />
            <p className="text-sm text-muted-foreground">
              Sayfamızı size daha iyi hizmet sunmak için sürekli olarak geliştiriyoruz.
            </p>
          </div>
          <div>
            <SupportStripe />
          </div>
        </div>

      </div>
    </section>
  )
}
