import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload, TypedLocale } from 'payload'

import { AnnouncementList } from '@/components/announcement/AnnouncementList'
import { Announcement } from '@/payload-types'
import config from '@/payload.config'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'announcements',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs?.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function AnnouncementsPage({ params }: Props) {
  const { locale } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'announcements',
    locale: locale as TypedLocale,
    sort: '-publishedAt',
    where: { _status: { equals: 'published' } },
  })

  if (!docs || docs.length === 0) return notFound()

  return <AnnouncementList announcements={docs as Announcement[]} />
}
