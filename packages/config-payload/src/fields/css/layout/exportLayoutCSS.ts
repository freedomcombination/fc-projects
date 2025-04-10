/**
 * Converts layout values from stored JSON format to CSS properties
 * Returns only the required CSS properties based on the selected layout type
 *
 * @param layoutValue - The JSON string value stored by the LayoutComponent
 * @returns CSS properties object that can be used with React style attribute
 */
export const exportLayoutCSS = (layoutValue: string | undefined): React.CSSProperties => {
  const defaultCSS: React.CSSProperties = {}

  if (!layoutValue) return defaultCSS

  try {
    const layoutValues = JSON.parse(layoutValue)
    const { type } = layoutValues

    if (type === 'none') return defaultCSS

    const cssProps: React.CSSProperties = {
      display: type,
    }

    if (layoutValues.gap && layoutValues.gap !== '0') {
      cssProps.gap = layoutValues.gap
    }

    if (type === 'flex') {
      if (layoutValues.flexDirection && layoutValues.flexDirection !== 'row') {
        cssProps.flexDirection = layoutValues.flexDirection
      }

      if (layoutValues.flexWrap && layoutValues.flexWrap !== 'nowrap') {
        cssProps.flexWrap = layoutValues.flexWrap
      }

      if (layoutValues.justifyContent && layoutValues.justifyContent !== 'flex-start') {
        cssProps.justifyContent = layoutValues.justifyContent
      }

      if (layoutValues.alignItems && layoutValues.alignItems !== 'stretch') {
        cssProps.alignItems = layoutValues.alignItems
      }
    }

    if (type === 'grid') {
      if (layoutValues.gridTemplateColumns === 'custom' && layoutValues.customGridTemplateColumns) {
        cssProps.gridTemplateColumns = layoutValues.customGridTemplateColumns
      } else if (layoutValues.gridTemplateColumns && layoutValues.gridTemplateColumns !== 'none') {
        cssProps.gridTemplateColumns = layoutValues.gridTemplateColumns
      }

      if (layoutValues.gridTemplateRows === 'custom' && layoutValues.customGridTemplateRows) {
        cssProps.gridTemplateRows = layoutValues.customGridTemplateRows
      } else if (layoutValues.gridTemplateRows && layoutValues.gridTemplateRows !== 'none') {
        cssProps.gridTemplateRows = layoutValues.gridTemplateRows
      }
    }

    return cssProps
  } catch (error) {
    console.error('Failed to parse layout value:', error)
    return defaultCSS
  }
}
