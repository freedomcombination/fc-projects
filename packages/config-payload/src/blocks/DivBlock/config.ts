import { NonContainerBlockConfigs } from '@fc/ui/blocks/common/non-container-block-list'

import type { Block } from 'payload'

import { cssColor } from '../../fields/css/color'
import { cssLayout } from '../../fields/css/layout'
import { cssRounded } from '../../fields/css/rounded'
import { cssSize } from '../../fields/css/size'
import { cssSpacing } from '../../fields/css/spacing'

const MAX_LEVELS = 5

const createBoxesWithMaxDepth = (maxDepth: number): Block => {
  const boxBlocks: Record<number, Block> = {}

  for (let i = maxDepth; i >= 0; i--) {
    const childrenBlocks =
      i === maxDepth ? [...NonContainerBlockConfigs] : [...NonContainerBlockConfigs, boxBlocks[i + 1]!]

    boxBlocks[i] = {
      fields: [
        {
          fields: [
            {
              fields: [
                {
                  tabs: [
                    {
                      fields: [cssLayout({ label: 'Layout', name: 'layout' })],
                      label: 'Layout',
                    },
                    {
                      fields: [cssSize({ label: 'Size', name: 'size' })],
                      label: 'Size',
                    },
                    {
                      fields: [
                        cssSpacing({ label: 'Margin', name: 'margin' }),
                        cssSpacing({ label: 'Padding', name: 'padding' }),
                      ],
                      label: 'Spacing',
                    },
                    {
                      fields: [
                        cssSpacing({ color: true, label: 'Border', name: 'border' }),
                        cssRounded({ label: 'Border Radius', name: 'borderRadius' }),
                      ],
                      label: 'Border',
                    },
                    {
                      fields: [
                        cssColor({ label: 'Background Color', name: 'backgroundColor' }),
                        cssColor({ forText: true, label: 'Text Color', name: 'color', solidOnly: true }),
                      ],
                      label: 'Colors',
                    },
                  ],
                  type: 'tabs',
                },
              ],
              label: 'Layout & Styling',
              type: 'collapsible',
            },
            {
              blocks: childrenBlocks,
              name: 'children',
              type: 'blocks',
            },
          ],
          name: 'boxSettings',
          type: 'group',
        },
      ],
      interfaceName: 'DivBlock',
      slug: i === 0 ? 'div' : `div_level_${i}`,
    }
  }

  return boxBlocks[0]!
}

export const Box = createBoxesWithMaxDepth(MAX_LEVELS)
