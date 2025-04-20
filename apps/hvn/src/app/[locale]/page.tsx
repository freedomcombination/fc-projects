import { getTranslations } from 'next-intl/server'
import { getPayload, TypedLocale } from 'payload'

import { AboutSection } from '@/components/about/AboutSection'
import { AnnouncementsSection } from '@/components/announcement/AnnouncementsSection'
import { Announcement } from '@/components/announcement/types'
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
    locale: locale || 'en',
    overrideAccess: false,
  })

  const announcementsResponse = await payload.find({
    collection: 'announcements',
    draft: false,
    locale: locale || 'en',
    overrideAccess: false,
  })

  const announcements = announcementsResponse.docs

  const applicationForm = formsResponse.docs.find((f) => f.title === 'Application Form')
  const contactForm = formsResponse.docs.find((f) => f.title === 'Contact Form')

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="from-primary to-secondary relative min-h-screen bg-gradient-to-b" id="home">
        <Hero />
      </section>
      {/* Announcements section */}
      <section className="border-b border-t bg-gradient-to-b from-zinc-100 py-16" id="announcements">
        <AnnouncementsSection announcements={announcements as Announcement[]} />
      </section>
      {/* About section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Application section */}
      {applicationForm && (
        <section className="border-b border-t bg-gradient-to-b from-zinc-100 py-16" id="application">
          <ApplicationForm applicationForm={applicationForm} />
        </section>
      )}

      {/* Contact section */}
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

      {/* Support section */}
      <Support />

      {/* Footer */}
      <Footer />
    </main>
  )
}
