import { Container } from '@fc/config-payload/blocks/Container/config'

import { Block } from 'payload'

import { ContainerBlock as ContainerBlockComponent } from '../../components/container/Container'

export const ContainerBlockConfigs: Block[] = [Container]

export const ContainerBlockComponentMap = {
  container: ContainerBlockComponent,
}
