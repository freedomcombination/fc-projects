import { FormBlock } from '@fc/config-payload/blocks/Form/config'
import { MediaBlock } from '@fc/config-payload/blocks/MediaBlock/config'
import { FormBlock as FormBlockComponent } from '@fc/ui/components/form-block/Component'
import { MediaBlock as MediaBlockComponent } from '@fc/ui/components/media-block/MediaBlock'

import { Block } from 'payload'

export const NonContainerBlockConfigs: Block[] = [MediaBlock, FormBlock]

export const NonContainerBlockComponentMap = {
  formBlock: FormBlockComponent,
  mediaBlock: MediaBlockComponent,
}
