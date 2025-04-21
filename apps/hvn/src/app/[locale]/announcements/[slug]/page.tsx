import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload, TypedLocale } from 'payload'

import { AnnouncementDetail } from '@/components/announcement/AnnouncementDetail'
import { Announcement } from '@/payload-types'
import config from '@/payload.config'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  const resolvedConfig = await configPromise
  const locales = ((resolvedConfig.localization && resolvedConfig.localization.locales) || ['en']).map((l: any) =>
    typeof l === 'string' ? l : l.code,
  )

  const announcements = await payload.find({
    collection: 'announcements',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const params = []

  for (const locale of locales) {
    for (const { slug } of announcements.docs || []) {
      if (slug) {
        params.push({ locale, slug })
      }
    }
  }

  return params
}

type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function AnnouncementDetailPage({ params }: Props) {
  const { locale, slug } = await params
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'announcements',
    draft: false,
    limit: 1,
    locale: locale as TypedLocale,
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
