import React from 'react'

import { Media } from '@fc/ui/components/Media/index'
import RichText from '@fc/ui/components/RichText'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="">
      <div className="container mb-8">
        {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex gap-4">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div className="container">
        {media && typeof media === 'object' && (
          <div>
            <Media className="-mx-4 md:-mx-8 2xl:-mx-16" imgClassName="" priority resource={media} />
            {/* TODO: Caption doesn't exist, remove if not needed */}
            {/* {media?.caption && (
              <div className="mt-3">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )} */}
          </div>
        )}
      </div>
    </div>
  )
}
