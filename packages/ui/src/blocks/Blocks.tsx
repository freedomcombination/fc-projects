import React, { Fragment } from 'react'

import { toKebabCase } from '@fc/config-payload/utils/toKebabCase'
import type { Page } from '@fc/types/payload-types'

import { devNull } from 'os'

import { blockComponentMap } from './common/blockComponentMap'

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
        const { blockName, blockType } = block

        if (blockType && blockType in blockComponentMap) {
          const Block = blockComponentMap[blockType] as React.ComponentType<{ id: string }>

          const id = toKebabCase(blockName || index.toString())

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          return <Block id={id} key={index} {...block} />
        }
        return null
      })}
    </Fragment>
  )
}
