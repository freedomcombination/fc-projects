import { Tabs, TabsContent, TabsList, TabsTrigger } from '@fc/ui/base/tabs'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { SupportStripe } from './StripeForm'
import { SupportBank } from './SupportBank'

export const Support = () => {
  const t = useTranslations()

  return (
    <section className="bg-gray-100 py-16" id="support">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h2 className="mb-4 text-4xl font-bold">{t('Header.support')}</h2>
        <div className="grid grid-cols-1 gap-8 rounded-lg bg-white p-6 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-6 text-left">
            <Image
              alt="Stichting Logo"
              className="h-24 rounded-full object-cover shadow-md md:h-64"
              height={150}
              src="/images/logo.png"
              width={250}
            />
          </div>

          <div className="space-y-4">
            <Tabs className="h-[480px]" defaultValue="stripe">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="stripe">{t('Donation.card')} / Ideal</TabsTrigger>
                <TabsTrigger value="bank">{t('Support.bankTransferTitle')}</TabsTrigger>
              </TabsList>
              <TabsContent className="py-2" value="stripe">
                <SupportStripe />
              </TabsContent>
              <TabsContent className="py-2" value="bank">
                <SupportBank />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
