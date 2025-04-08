import React from 'react'

import { cn } from '@fc/ui/lib/utils'

import type { StaticImageData } from 'next/image'

import { Media } from '../Media'
import RichText, { RichTextProps } from '../RichText'

export type Media = {
  id: string
  alt: string
  updatedAt: string
  createdAt: string
  url?: string | null
  thumbnailURL?: string | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  width?: number | null
  height?: number | null
  focalX?: number | null
  focalY?: number | null
}

export type MediaBlockProps = {
  media: string | Media
  id?: string | null
  blockName?: string | null
  blockType: 'mediaBlock'
}

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    disableInnerContainer,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
  } = props

  let caption
  if (media && typeof media === 'object') caption = (media as unknown as { caption: RichTextProps['data'] }).caption

  return (
    <div
      className={cn(
        '',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}
