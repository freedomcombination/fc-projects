import { cn } from '@/utilities/ui'

import { RenderContainerBlocks } from '../common/RenderContainerBlock'
import { ExtBlock } from '../common/type'

type ContainerProps = {
  type: string
  blocks: ExtBlock[]
}

export const ContainerBlock: React.FC<ContainerProps> = (prop) => {
  const { blocks = [], type = 'container' } = prop

  return (
    <div
      className={cn({
        'container mx-auto': type === 'container',
        'w-screen': type === 'section',
      })}
    >
      <RenderContainerBlocks blocks={blocks} />
    </div>
  )
}
