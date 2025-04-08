import { CSSProperties } from 'react'

import { SpacingValueType } from './types'

export const exportBorderCSS = (value: string | undefined): CSSProperties => {
  let parsedValue: SpacingValueType = { colors: {}, widths: {} }

  if (!value) {
    return {}
  }

  try {
    parsedValue = JSON.parse(value) as SpacingValueType
  } catch {
    parsedValue = {
      colors: { bottom: '#000000', left: '#000000', right: '#000000', top: '#000000' },
      widths: { bottom: '0', left: '0', right: '0', top: '0' },
    }
  }

  const { colors = {}, widths = {} } = parsedValue
  const cssProperties: CSSProperties = {}

  if (widths) {
    const allWidthsAreSame =
      widths.top === widths.right && widths.right === widths.bottom && widths.bottom === widths.left

    if (allWidthsAreSame) {
      cssProperties.borderWidth = `${widths.top}px`
    } else {
      if (widths.top) cssProperties.borderTopWidth = `${widths.top}px`
      if (widths.right) cssProperties.borderRightWidth = `${widths.right}px`
      if (widths.bottom) cssProperties.borderBottomWidth = `${widths.bottom}px`
      if (widths.left) cssProperties.borderLeftWidth = `${widths.left}px`
    }
  }

  if (colors) {
    const allColorsAreSame =
      colors.top === colors.right && colors.right === colors.bottom && colors.bottom === colors.left

    if (allColorsAreSame && colors.top) {
      cssProperties.borderColor = colors.top
      cssProperties.borderStyle = 'solid'
    } else {
      if (colors.top) cssProperties.borderTopColor = colors.top
      if (colors.right) cssProperties.borderRightColor = colors.right
      if (colors.bottom) cssProperties.borderBottomColor = colors.bottom
      if (colors.left) cssProperties.borderLeftColor = colors.left
      if (colors.top || colors.right || colors.bottom || colors.left) {
        cssProperties.borderStyle = 'solid'
      }
    }
  }

  return cssProperties
}

export const exportSpacingCSS = (value: string | undefined, key: 'margin' | 'padding'): CSSProperties => {
  let parsedValue: SpacingValueType = { widths: {} }

  if (!value) {
    return {}
  }

  try {
    parsedValue = JSON.parse(value) as SpacingValueType
  } catch {
    parsedValue = {
      widths: { bottom: '0', left: '0', right: '0', top: '0' },
    }
  }

  const { widths = {} } = parsedValue
  const cssProperties: CSSProperties = {}

  if (widths) {
    const allWidthsAreSame =
      widths.top === widths.right && widths.right === widths.bottom && widths.bottom === widths.left

    if (allWidthsAreSame) {
      if (widths.top) cssProperties[`${key}`] = `${widths.top}px`
    } else {
      if (widths.top) cssProperties[`${key}Top`] = `${widths.top}px`
      if (widths.right) cssProperties[`${key}Right`] = `${widths.right}px`
      if (widths.bottom) cssProperties[`${key}Bottom`] = `${widths.bottom}px`
      if (widths.left) cssProperties[`${key}Left`] = `${widths.left}px`
    }
  }

  return cssProperties
}
