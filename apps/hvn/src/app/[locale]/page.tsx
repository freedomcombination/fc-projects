import { getTranslations } from 'next-intl/server'
import { getPayload, TypedLocale } from 'payload'

import { AboutSection } from '@/components/about/AboutSection'
import { AnnouncementsSection } from '@/components/announcement/AnnouncementsSection'
import { ApplicationForm } from '@/components/application-from'
import { Footer } from '@/components/footer/Footer'
import { Hero } from '@/components/hero/Hero'
import { PayloadForm } from '@/components/PayloadForm/PayloadForm'
import { Support } from '@/components/support/Support'
import config from '@/payload.config'

type Props = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function HomePage({ params }: Props) {
  const t = await getTranslations()
  const { locale } = await params

  const payload = await getPayload({ config })

  const formsResponse = await payload.find({
    collection: 'forms',
    draft: false,
    locale: locale || 'en', // this is now redundant
    overrideAccess: false,
  })

  const applicationForm = formsResponse.docs.find((f) => f.title === 'Application Form')
  const contactForm = formsResponse.docs.find((f) => f.title === 'Contact Form')

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="relative min-h-screen bg-gradient-to-b from-primary to-secondary" id="home">
        <Hero />
      </section>
      {/* Announcements section */}
      <section className="py-16 bg-gradient-to-b border-t border-b from-zinc-100" id="announcements">
        <AnnouncementsSection />
      </section>
      {/* About section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Application section */}
      {applicationForm && (
        <section className="py-16 bg-gradient-to-b border-t border-b from-zinc-100" id="application">
          <ApplicationForm applicationForm={applicationForm} />
        </section>
      )}

      {/* Contact section */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">{t('Contact.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('Contact.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">{t('Contact.contactInfo')}</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div>
                    <h4 className="font-medium text-xl">{t('Contact.email')}</h4>
                    <p className="text-muted-foreground">info@harmonievannederland.com</p>
                  </div>
                </div>
              </div>
            </div>

            {contactForm && <PayloadForm formData={contactForm} />}
          </div>
        </div>
      </section>

      {/* Support section */}
      <Support />

      {/* Footer */}
      <Footer />
    </main>
  )
}
