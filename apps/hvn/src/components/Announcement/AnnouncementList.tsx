'use client'

import { FC } from 'react'

import { Link } from '@fc/intl/navigation'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Announcement, Media } from '@/payload-types'

type AnnouncementListProps = {
  announcements: Announcement[]
}

export const AnnouncementList: FC<AnnouncementListProps> = ({ announcements }) => {
  const t = useTranslations('Header')

  return (
    <div className="container mx-auto mt-4 px-4 py-12">
      <h1 className="mb-10 text-3xl font-bold">{t('announcements')}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map((item) => (
          <Link className="cursor-pointer" href={`/announcements/${item.slug}`} key={item.id}>
            <div className="rounded-lg border p-4 shadow" key={item.id}>
              {item.image && (
                <Image
                  alt={item.title + ' image'}
                  className="mb-4 rounded-md object-cover"
                  height={300}
                  src={(item.image as Media).url as string}
                  width={400}
                />
              )}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
