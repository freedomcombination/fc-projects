import { Block } from 'payload'

export type CmsBlock = Block & {
  blockType: string
}

export type ContainerBlockProps = {
  blocks: CmsBlock[]
}
