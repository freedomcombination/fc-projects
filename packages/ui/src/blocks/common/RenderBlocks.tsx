import { FC, Fragment } from 'react'

import { blockComponentMap } from './blockComponentMap'
import { ContainerBlockProps } from './type'

export const RenderBlocks: FC<ContainerBlockProps> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponentMap) {
            const Block = blockComponentMap[blockType as keyof typeof blockComponentMap]

            if (Block) {
              return (
                <Fragment key={index}>
                  {/* @ts-expect-error there may be mismatched types */}
                  <Block {...block} />
                </Fragment>
              )
            }
            return null
          }
        })}
      </Fragment>
    )
  }

  return null
}
