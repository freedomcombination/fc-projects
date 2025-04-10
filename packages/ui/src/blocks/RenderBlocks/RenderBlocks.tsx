import React, { Fragment } from 'react'

import { blockComponentMap } from './blockComponentMap'
import { mapBlockProps } from './mapBlockProps'
import { ContainerBlockProps } from './types'

export const RenderBlocks: React.FC<ContainerBlockProps> = ({ blocks }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) {
    return null
  }

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block

        if (!blockType || !(blockType in blockComponentMap)) {
          return null
        }

        const Block = blockComponentMap[blockType as keyof typeof blockComponentMap] as React.ComponentType<{
          id: string
        }>

        const id = blockType || index.toString()

        return <Block id={id} key={index} {...mapBlockProps(block)} />
      })}
    </Fragment>
  )
}
