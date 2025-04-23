import React from 'react'

import { Media } from '@fc/types/payload-types'
import { cn } from '@fc/ui/lib/utils'

import type { StaticImageData } from 'next/image'

import { MediaElement } from '../MediaElement'
import RichText, { RichTextProps } from '../RichText'

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
        <MediaElement
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
