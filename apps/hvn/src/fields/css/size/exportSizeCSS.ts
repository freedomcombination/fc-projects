/**
 * Converts size values from stored JSON format to CSS properties
 * Returns only the properties that have been set, optimizing the CSS output
 *
 * @param sizeValue - The JSON string value stored by the SizeComponent
 * @returns CSS properties object that can be used with React style attribute
 */
export const exportSizeCSS = (sizeValue: string | undefined): React.CSSProperties => {
  const defaultCSS: React.CSSProperties = {}

  if (!sizeValue) return defaultCSS

  try {
    const sizeValues = JSON.parse(sizeValue)
    const cssProps: React.CSSProperties = {}

    const cssNameMap: { [key: string]: keyof React.CSSProperties } = {
      height: 'height',
      maxHeight: 'maxHeight',
      maxWidth: 'maxWidth',
      minHeight: 'minHeight',
      minWidth: 'minWidth',
      width: 'width',
    }

    Object.entries(sizeValues).forEach(([propName, propData]: [string, any]) => {
      if (!cssNameMap[propName]) return

      let propertyValue: string | undefined

      if (propData.usePreset && propData.preset) {
        propertyValue = propData.preset
      } else if (propData.unit) {
        if (propData.unit === 'auto') {
          propertyValue = 'auto'
        } else if (propData.unit === 'custom') {
          if (propData.value && propData.value.trim()) {
            propertyValue = propData.value.trim()
          }
        } else if (propData.value) {
          propertyValue = `${propData.value}${propData.unit}`
        }
      }

      if (propertyValue) {
        const cssPropName = cssNameMap[propName]
        if (cssPropName) {
          cssProps[cssPropName] = propertyValue as any
        }
      }
    })

    return cssProps
  } catch (error) {
    console.error('Failed to parse size value:', error)
    return defaultCSS
  }
}

/**
 * A more advanced version that combines multiple style objects
 * Useful when you have multiple components controlling different style aspects
 *
 * @param styleObjects - Array of style objects or JSON strings to combine
 * @returns Combined CSS properties object
 */
export const combineStyles = (...styleObjects: (string | React.CSSProperties)[]): React.CSSProperties => {
  const result: React.CSSProperties = {}

  styleObjects.forEach((styleObj) => {
    if (!styleObj) return

    let parsedStyles: React.CSSProperties

    if (typeof styleObj === 'string') {
      try {
        parsedStyles = exportSizeCSS(styleObj)
      } catch (e) {
        console.error('Failed to parse style string:', e)
        return
      }
    } else {
      parsedStyles = styleObj
    }

    Object.assign(result, parsedStyles)
  })

  return result
}
