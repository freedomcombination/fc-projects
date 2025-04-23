import { notFound } from 'next/navigation'
import { getPayload, TypedLocale } from 'payload'

import { AnnouncementList } from '@/components/Announcement_/AnnouncementList'
import { LOCALES } from '@/i18n/locales'
import { Announcement } from '@/payload-types'
import configPromise from '@/payload.config'

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale, slug: 'announcements' }))
}

export default async function AnnouncementsPage({ params }: Args) {
  const { locale } = await params
  const config = await configPromise
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'announcements',
    draft: false,
    locale,
    sort: '-publishedAt',
  })

  if (!docs || docs.length === 0) return notFound()

  return <AnnouncementList announcements={docs as Announcement[]} />
}
