import { CSSProperties, Fragment, useMemo } from 'react'

import { exportColorCSS } from '@fc/config-payload/fields/css/color/exportColorCSS'
import { exportLayoutCSS } from '@fc/config-payload/fields/css/layout/exportLayoutCSS'
import { exportRoundedCSS } from '@fc/config-payload/fields/css/rounded/exportRoundedCSS'
import { exportSizeCSS } from '@fc/config-payload/fields/css/size/exportSizeCSS'
import { exportBorderCSS, exportSpacingCSS } from '@fc/config-payload/fields/css/spacing/exportSpacingCSS'

import { Block } from 'payload'

import { RenderContainerBlocks } from '../../blocks/common/RenderContainerBlock'
import { ExtBlock } from '../../blocks/common/type'

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

          if (blockType.startsWith('div')) {
            return <DivBlock key={index} {...(block as unknown as DivBlockProps)} />
          }

          return <RenderContainerBlocks blocks={[block as unknown as ExtBlock]} key={index} />
        })}
      </Fragment>
    )
  }

  return <div style={generatedCSS}>{renderChildren()}</div>
}
