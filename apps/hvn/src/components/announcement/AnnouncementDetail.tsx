'use client'

import { FC } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { Button } from '@fc/ui/base/button'
import RichText from '@fc/ui/components/RichText'

import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { useRouter } from 'next/navigation'

import { RenderHero } from '@/heros/RenderHero'
import { Announcement, Page } from '@/payload-types'

type AnnouncementProps = {
  announcement: Announcement
}

export const AnnouncementDetail: FC<AnnouncementProps> = ({ announcement }) => {
  const { image } = announcement || {}
  const router = useRouter()

  return (
    <div className="container mx-auto mt-4 px-4 py-12">
      <div className="hover:text-primary cursor-pointer transition-colors">
        <Button
          className="hover:bg-primary/90 mb-8 flex items-center rounded-md p-2 transition-colors"
          onClick={() => router.back()}
        >
          <IoMdArrowRoundBack size={24} />
        </Button>{' '}
      </div>
      <RenderHero media={image as Page['hero']['media']} type="highImpact" />

      <h1 className="mb-4 text-3xl font-bold">{announcement.title}</h1>
      <div className="announcement-content prose max-w-none">
        <RichText data={announcement.content as DefaultTypedEditorState} />
      </div>
    </div>
  )
}
