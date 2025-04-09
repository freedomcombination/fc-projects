import { CmsBlock } from '@fc/ui/blocks/common/type'
import { cn } from '@fc/ui/lib/utils'

import { Container as ContainerType } from '../../../../../apps/hvn/payload-types'
import { RenderBlocks } from '../../blocks/common/RenderBlocks'

type ContainerProps = Pick<ContainerType, 'fluid' | 'spacing' | 'blocks'>

export const Container: React.FC<ContainerProps> = (prop) => {
  const { blocks = [], fluid, spacing } = prop

  return (
    <div
      className={cn({
        'container mx-auto': !fluid,
        'max-w-screen': fluid,
        'py-lg': spacing === 'lg',
        'py-md': spacing === 'md',
        'py-sm': spacing === 'sm',
      })}
    >
      <RenderBlocks blocks={blocks as unknown as CmsBlock[]} />
    </div>
  )
}
