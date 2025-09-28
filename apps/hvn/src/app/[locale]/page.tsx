import { draftMode } from 'next/headers'
import { getPayload, TypedLocale } from 'payload'

import { AboutSection } from '@/components/AboutSection/AboutSection'
import { AnnouncementsSection } from '@/components/Announcement/AnnouncementsSection'
import { ApplicationForm } from '@/components/ApplicationForm'
import { Hero } from '@/components/Hero/Hero'
import { LOCALES } from '@/i18n/locales'
import { Announcement } from '@/payload-types'
import config from '@/payload.config'

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function HomePage({ params }: Args) {
  const { locale } = await params
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config })

  const formsResponse = await payload.find({
    collection: 'forms',
    draft,
    locale: locale || 'en',
    overrideAccess: draft,
  })

  const announcementsResponse = await payload.find({
    collection: 'announcements',
    draft,
    locale: locale || 'en',
    overrideAccess: draft,
  })

  const announcements = announcementsResponse.docs

  const applicationForm = formsResponse.docs.find((f) => f.title === 'Application Form')

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="from-primary to-secondary relative min-h-screen bg-gradient-to-b" id="home">
        <Hero />
      </section>
      {/* Announcements section */}
      {announcements && announcements.length > 0 && (
        <section className="border-b border-t bg-gradient-to-b from-zinc-100 py-16" id="announcements">
          <AnnouncementsSection announcements={announcements as Announcement[]} />
        </section>
      )}
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
    </main>
  )
}
