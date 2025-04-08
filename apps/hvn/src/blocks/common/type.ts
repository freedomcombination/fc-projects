import { Block } from 'payload'

export type ExtBlock = Block & {
  blockType: string
}

export type ContainerBlockProps = {
  blocks: ExtBlock[]
}
