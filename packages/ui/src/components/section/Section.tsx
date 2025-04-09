import { Section as SectionType } from '../../../../../apps/hvn/payload-types'
import { RenderBlocks } from '../../blocks/common/RenderBlocks'
import { CmsBlock } from '../../blocks/common/type'

type SectionProps = Pick<SectionType, 'blocks' | 'background' | 'image' | 'spacing'>

export const Section: React.FC<SectionProps> = (prop) => {
  const {
    blocks = [],
    // background,
    // image
  } = prop

  return (
    <div>
      <RenderBlocks blocks={blocks as unknown as CmsBlock[]} />
    </div>
  )
}
