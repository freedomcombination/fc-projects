import { Container, Section } from '@fc/types/payload-types'

import { RenderBlocks } from './RenderBlocks'
import { CmsBlock } from './types'

const mapContainerProps = (block: Container) => {
  return {
    blocks: block.blocks,
    children: block.blocks?.map((block) => <RenderBlocks blocks={[block as unknown as CmsBlock]} key={block.id} />),
    fluid: block.fluid,
    spacing: block.spacing,
  }
}

const mapSectionProps = (block: Section) => {
  return {
    background: block.background,
    children: block.blocks?.map((block) => <RenderBlocks blocks={[block as unknown as CmsBlock]} key={block.id} />),
    image: block.image,
    spacing: block.spacing,
  }
}

export const mapBlockProps = (block: CmsBlock) => {
  const { blockType } = block

  switch (blockType) {
    case 'container':
      return mapContainerProps(block as Container)
    case 'section':
      return mapSectionProps(block as Section)
    default:
      return block
  }
}
