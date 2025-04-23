import React from 'react'

import { cn } from '@fc/ui/lib/utils'

import { MediaElement } from '../MediaElement/MediaElement'
import RichText, { RichTextProps } from '../RichText/RichText'
import { MediaBlockProps } from './types'

export const MediaBlock: React.FC<MediaBlockProps> = (props) => {
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
