import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload, TypedLocale } from 'payload'

import { AnnouncementDetail } from '@/components/announcement/AnnouncementDetail'
import { LOCALES } from '@/i18n/locales'
import { Announcement } from '@/payload-types'
import configPromise from '@/payload.config'

type Args = {
  params: Promise<{
    locale: TypedLocale
    slug: string
  }>
}

export async function generateStaticParams() {
  const config = await configPromise
  const payload = await getPayload({ config })

  const announcements = await payload.find({
    collection: 'announcements',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  const params = []
  const slugs = announcements.docs?.filter(({ slug }) => slug).map(({ slug }) => slug)

  for (const locale of LOCALES) {
    for (const slug of slugs || []) {
      params.push({ locale, slug })
    }
  }

  return params
}

export default async function AnnouncementDetailPage({ params }: Args) {
  const { locale, slug } = await params
  const { isEnabled: draft } = await draftMode()
  const config = await configPromise
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'announcements',
    draft,
    limit: 1,
    locale,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const announcement = result.docs?.[0]

  if (!announcement) {
    return notFound()
  }

  return <AnnouncementDetail announcement={announcement as Announcement} />
}
