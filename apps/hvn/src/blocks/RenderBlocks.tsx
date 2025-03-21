import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { BannerBlock } from '@/blocks/Banner/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

import { DivBlock } from './DivBlock/Component'

const blockComponents = {
  banner: BannerBlock,
  //  component: ComponentBlock,
  content: ContentBlock,
  //  cta: CallToActionBlock,
  div: DivBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  //  section: SectionBlock
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
