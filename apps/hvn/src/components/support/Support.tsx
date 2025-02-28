import { Tabs, TabsContent, TabsList, TabsTrigger } from '@fc/ui/base/tabs'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { SupportStripe } from './stripe-form'
import { SupportBank } from './support-bank'

export const Support = () => {
  const t = useTranslations()

  return (
    <section className="py-16 bg-gray-100" id="support">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4">{t('Header.support')}</h2>
        <div className="flex justify-center bg-white rounded-lg">
          <Image
            alt="ANBI Logo"
            className="h-20 object-cover shadow-md  mt-4"
            height={100}
            src="/images/anbi-logo.png"
            width={100}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-6">
          <div className="flex flex-col items-center justify-center gap-6 text-left">
            <Image
              alt="Stichting Logo"
              className="rounded-full object-cover shadow-md h-24 md:h-64"
              height={150}
              src="/images/logo.png"
              width={250}
            />
          </div>

          <div className="space-y-4">
            <Tabs className="h-[480px]" defaultValue="stripe">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="stripe">Card / Ideal</TabsTrigger>
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
