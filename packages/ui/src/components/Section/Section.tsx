import { PropsWithChildren } from 'react'

import { Section as SectionType } from '@fc/types/payload-types'

type SectionProps = PropsWithChildren<Pick<SectionType, 'background' | 'image' | 'spacing'>>

export const Section: React.FC<SectionProps> = (prop) => {
  const {
    children,
    // background,
    // image
  } = prop

  return <div>{children}</div>
}
