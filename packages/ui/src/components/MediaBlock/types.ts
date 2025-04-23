import { Media } from '@fc/types/payload-types'

import { StaticImageData } from 'next/image'

type MediaBlockBaseProps = {
  media: string | Media
  id?: string | null
  blockName?: string | null
  blockType: 'mediaBlock'
}

export type MediaBlockProps = MediaBlockBaseProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}
