import { notFound } from 'next/navigation'
import { getPayload, TypedLocale } from 'payload'

import { AnnouncementList } from '@/components/announcement/AnnouncementList'
import { Announcement } from '@/components/announcement/types'
import config from '@/payload.config'

type Props = {
  params: {
    locale: string
  }
}

export default async function AnnouncementsPage({ params }: Props) {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'announcements',
    locale: params.locale as TypedLocale,
    sort: '-publishedAt',
    where: { _status: { equals: 'published' } },
  })

  if (!docs || docs.length === 0) return notFound()

  return <AnnouncementList announcements={docs as Announcement[]} />
}
