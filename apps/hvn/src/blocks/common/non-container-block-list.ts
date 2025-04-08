import { Block } from 'payload'

import { FormBlock as FormBlockComponent } from '../Form/Component'
import { FormBlock } from '../Form/config'
import { MediaBlock as MediaBlockComponent } from '../MediaBlock/Component'
import { MediaBlock } from '../MediaBlock/config'

export const NonContainerBlockConfigs: Block[] = [MediaBlock, FormBlock]

export const NonContainerBlockComponentMap = {
  formBlock: FormBlockComponent,
  mediaBlock: MediaBlockComponent,
}
