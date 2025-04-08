import { Block } from 'payload'

import { ContainerBlock as ContainerBlockComponent } from '../Container/Component'
import { Container } from '../Container/config'

export const ContainerBlockConfigs: Block[] = [Container]

export const ContainerBlockComponentMap = {
  container: ContainerBlockComponent,
}
