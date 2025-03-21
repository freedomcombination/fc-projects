import { CSSProperties, Fragment, useMemo } from 'react'

import { Block } from 'payload'

import { exportColorCSS } from '@/fields/css/color/exportColorCSS'
import { exportLayoutCSS } from '@/fields/css/layout/exportLayoutCSS'
import { exportRoundedCSS } from '@/fields/css/rounded/exportRoundedCSS'
import { exportSizeCSS } from '@/fields/css/size/exportSizeCSS'
import { exportBorderCSS, exportSpacingCSS } from '@/fields/css/spacing/exportSpacingCSS'

import { ContentBlock } from '../Content/Component'
import { FormBlock } from '../Form/Component'
import { MediaBlock } from '../MediaBlock/Component'

type BoxSettingProps = {
  layout?: string
  margin?: string
  padding?: string
  border?: string
  borderRadius?: string
  backgroundColor?: string
  color?: string
  size?: string
  children?: Block[]
}

type DivBlockProps = {
  className?: string
  variant?: string
  children?: Block[]
  boxSettings: BoxSettingProps
}

const blockComponents = {
  //  component: ComponentBlock,
  content: ContentBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
}

export const DivBlock: React.FC<DivBlockProps> = (prop) => {
  const { boxSettings } = prop
  const { children } = boxSettings

  const hasChildren = children && Array.isArray(children) && children.length > 0

  const generatedCSS: CSSProperties = useMemo(() => {
    const layoutCSS = exportLayoutCSS(boxSettings.layout)
    const marginCSS = exportSpacingCSS(boxSettings.margin, 'margin')
    const paddingCSS = exportSpacingCSS(boxSettings.padding, 'padding')
    const borderCSS = exportBorderCSS(boxSettings.border)
    const borderRadiusCSS = exportRoundedCSS(boxSettings.borderRadius)
    const backgroundColorCSS = exportColorCSS(boxSettings.backgroundColor, false)
    const colorCSS = exportColorCSS(boxSettings.color, true)
    const sizeCSS = exportSizeCSS(boxSettings.size)

    return {
      ...layoutCSS,
      ...marginCSS,
      ...paddingCSS,
      ...borderCSS,
      ...borderRadiusCSS,
      ...backgroundColorCSS,
      ...colorCSS,
      ...sizeCSS,
    }
  }, [boxSettings])

  const renderChildren = () => {
    if (!hasChildren) return null

    return (
      <Fragment>
        {children.map((block, index) => {
          const { blockType } = block as unknown as { blockType: string }

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }

          if (blockType.startsWith('div')) {
            return <DivBlock key={index} {...(block as unknown as DivBlockProps)} />
          }

          return null
        })}
      </Fragment>
    )
  }

  return <div style={generatedCSS}>{renderChildren()}</div>
}
