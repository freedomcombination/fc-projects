import { FC, Fragment } from 'react'

import { ContainerBlockComponentMap } from './container-block-list'
import { NonContainerBlockComponentMap } from './non-container-block-list'
import { ContainerBlockProps } from './type'

export const RenderContainerBlocks: FC<ContainerBlockProps> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  const blockComponents = {
    ...ContainerBlockComponentMap,
    ...NonContainerBlockComponentMap,
  }

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

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
