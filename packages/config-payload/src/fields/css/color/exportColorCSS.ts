import { CSSProperties } from 'react'

import { ColorValueType, GradientStop } from './type'

// Helper function to generate gradient stops string
const generateGradientStops = (colors: GradientStop[]): string => {
  return colors.map((stop) => `${stop.color} ${stop.position}%`).join(', ')
}

export const exportColorCSS = (value: string | undefined, forText: boolean = false): CSSProperties => {
  if (!value) {
    return {}
  }

  let colorValue: ColorValueType = {
    angle: 90,
    colors: [{ color: '#ffffff', position: 0 }],
    position: 'center',
    type: 'solid',
  }

  try {
    const parsed = JSON.parse(value) as ColorValueType
    colorValue = parsed
  } catch (error) {
    console.error('Failed to parse color value JSON for export:', error)
    return {}
  }

  const cssProperties: CSSProperties = {}
  const { angle, colors, position, type } = colorValue

  if (type === 'none') return {}

  const gradientStops = colors && colors.length >= 2 ? generateGradientStops(colors) : undefined

  if (forText) {
    if (type === 'solid') {
      if (colors[0]?.color) cssProperties.color = colors[0]?.color
    } else if (gradientStops) {
      const gradientCSSValue = `${type}(${
        type === 'linear-gradient'
          ? `${angle}deg, `
          : type === 'radial-gradient'
            ? `circle at ${position}, `
            : type === 'conic-gradient'
              ? `from 0deg at ${position}, `
              : ''
      }${gradientStops})`

      cssProperties.backgroundImage = gradientCSSValue
      cssProperties.backgroundClip = 'text'
      cssProperties.color = 'transparent'
      cssProperties.WebkitBackgroundClip = 'text'
    }
  } else {
    if (type === 'solid') {
      if (colors[0]?.color) cssProperties.background = colors[0]?.color
    } else if (gradientStops) {
      cssProperties.background = `${type}(${
        type === 'linear-gradient'
          ? `${angle}deg, `
          : type === 'radial-gradient'
            ? `circle at ${position}, `
            : type === 'conic-gradient'
              ? `from 0deg at ${position}, `
              : ''
      }${gradientStops})`
    }
  }

  return cssProperties
}
