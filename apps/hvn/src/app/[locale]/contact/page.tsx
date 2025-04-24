import { getTranslations } from 'next-intl/server'
import { draftMode } from 'next/headers'
import { getPayload, TypedLocale } from 'payload'

import { PayloadForm } from '@/components/PayloadForm'
import { LOCALES } from '@/i18n/locales'
import config from '@/payload.config'

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}
export default async function ContactPage({ params }: Args) {
  const t = await getTranslations()
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config })
  const { locale } = await params
  const formsResponse = await payload.find({
    collection: 'forms',
    draft,
    locale: locale || 'en',
    overrideAccess: draft,
  })
  const contactForm = formsResponse.docs.find((f) => f.title === 'Contact Form')

  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-8 text-4xl font-bold">{t('Contact.title')}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">{t('Contact.subtitle')}</p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-semibold">{t('Contact.contactInfo')}</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div>
                  <h4 className="text-xl font-medium">{t('Contact.email')}</h4>
                  <p className="text-muted-foreground">info@harmonievannederland.com</p>
                </div>
              </div>
            </div>
          </div>
          {contactForm && <PayloadForm formData={contactForm} />}
        </div>
      </div>
    </section>
  )
}
