import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload, TypedLocale } from 'payload'

import { AnnouncementDetail } from '@/components/announcement/AnnouncementDetail'
import { Announcement } from '@/components/announcement/types'
import config from '@/payload.config'

type Props = {
  params: {
    locale: string
    slug: string
  }
}

export default async function AnnouncementDetailPage({ params }: Props) {
  const { locale, slug } = await params
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'announcements',
    draft,
    limit: 1,
    locale: locale as TypedLocale,
    overrideAccess: draft,
    pagination: false,
    where: {
      _status: {
        equals: 'published',
      },
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
