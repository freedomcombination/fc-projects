import React, { Fragment } from 'react'

import { toKebabCase } from '@fc/config-payload/utils/toKebabCase'
import type { Page } from '@fc/types/payload-types'

import { devNull } from 'os'

const blockComponents = {}

export const Blocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) {
    return devNull
  }

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockName, blockType, form } = block

        if (blockType && blockType in blockComponents) {
          const Block = blockComponents[blockType]

          const id = toKebabCase(blockName || '')

          // @ts-expect-error
          return <Block id={id || index} key={index} {...block} />
        }
        return null
      })}
    </Fragment>
  )
}
