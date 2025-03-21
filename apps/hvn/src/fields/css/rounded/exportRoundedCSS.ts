import { CSSProperties } from 'react'

export const exportRoundedCSS = (value: string | undefined): CSSProperties => {
  if (!value) {
    return {}
  }

  const [leftTop = '0', rightTop = '0', rightBottom = '0', leftBottom = '0'] = value.split(';')

  const cssProperties: CSSProperties = {}

  if (leftTop === rightTop && rightTop === rightBottom && rightBottom === leftBottom) {
    if (leftTop !== '0') cssProperties.borderRadius = leftTop
  } else {
    if (leftTop !== '0') cssProperties.borderTopLeftRadius = leftTop
    if (rightTop !== '0') cssProperties.borderTopRightRadius = rightTop
    if (rightBottom !== '0') cssProperties.borderBottomRightRadius = rightBottom
    if (leftBottom !== '0') cssProperties.borderBottomLeftRadius = leftBottom
  }

  return cssProperties
}
