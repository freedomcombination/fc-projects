'use client'

import React, { CSSProperties, useEffect, useState } from 'react'

import { FieldLabel, useField } from '@payloadcms/ui'
import { Option } from '@payloadcms/ui/elements/ReactSelect'
import { LucidePlusCircle } from 'lucide-react'

import { ColorPicker } from '../common/ColorPicker'
import { ReactSingleSelect } from '../common/ReactSingleSelect'
import { BackgroundType, ColorComponentProps, ColorValueType, GradientStop } from './type'

export const ColorComponent: React.FC<ColorComponentProps> = ({
  defaultColor = '#ffffff',
  field,
  forText = false,
  path: basePath,
  readOnly,
  sampleText = 'Sample Text with Gradient',
  solidOnly = false,
}) => {
  const path = basePath || field.name
  const { setValue, value } = useField<string>({ path })

  // Parse the existing value or set defaults
  const [colorValue, setColorValue] = useState<ColorValueType>({
    angle: 90,
    colors: [{ color: defaultColor, position: 0 }],
    position: 'center',
    type: 'solid',
  })

  // Initialize from JSON value
  useEffect(() => {
    if (value) {
      try {
        const parsed = JSON.parse(value)
        setColorValue(parsed)
      } catch (error) {
        console.error('Failed to parse color value JSON:', error)
        // Set default if parsing fails
        setColorValue({
          angle: 90,
          colors: [{ color: defaultColor, position: 0 }],
          position: 'center',
          type: 'solid',
        })
      }
    }
  }, [value, defaultColor])

  // Update JSON value when color settings change
  const updateValue = (newColorValue: ColorValueType) => {
    setColorValue(newColorValue)
    setValue(JSON.stringify(newColorValue))
  }

  // Handle type change
  const handleTypeChange = (selectedOption: Option) => {
    if (!selectedOption) return

    const newType = selectedOption.value as BackgroundType
    const newValue = { ...colorValue, type: newType }

    // Ensure we have correct number of colors for each type
    if (newType === 'solid' && newValue.colors.length !== 1) {
      newValue.colors = [{ color: newValue.colors[0]?.color || defaultColor, position: 0 }]
    } else if (newType !== 'solid' && newValue.colors.length < 2) {
      newValue.colors = [
        { color: newValue.colors[0]?.color || defaultColor, position: 0 },
        { color: '#000000', position: 100 },
      ]
    }

    updateValue(newValue)
  }

  // Handle color change
  const handleColorChange = (index: number, newColor: string) => {
    const newColors = [...colorValue.colors]
    newColors[index] = { ...newColors[index], color: newColor } as GradientStop
    updateValue({ ...colorValue, colors: newColors })
  }

  // Handle position change
  const handlePositionChange = (index: number, newPosition: number) => {
    const newColors = [...colorValue.colors]
    newColors[index] = { ...newColors[index], position: newPosition } as GradientStop
    updateValue({ ...colorValue, colors: newColors })
  }

  // Handle angle change for linear gradient
  const handleAngleChange = (newAngle: number) => {
    updateValue({ ...colorValue, angle: newAngle })
  }

  // Handle position change for radial gradient
  const handlePositionTypeChange = (selectedOption: Option) => {
    if (!selectedOption) return
    updateValue({ ...colorValue, position: selectedOption.value as string })
  }

  // Add new color stop
  const addColorStop = () => {
    const newColors = [...colorValue.colors]

    // Calculate a middle position for the new stop
    const positions = newColors.map((stop) => stop.position)
    const maxPosition = Math.max(...positions)
    const minPosition = Math.min(...positions)
    const middlePosition = Math.round((maxPosition + minPosition) / 2)

    newColors.push({ color: defaultColor, position: middlePosition })
    newColors.sort((a, b) => a.position - b.position) // Sort by position

    updateValue({ ...colorValue, colors: newColors })
  }

  // Remove color stop
  const removeColorStop = (index: number) => {
    if (colorValue.colors.length <= (colorValue.type === 'solid' ? 1 : 2)) {
      return // Keep at least 1 color for solid, 2 for gradients
    }

    const newColors = colorValue.colors.filter((_, i) => i !== index)
    updateValue({ ...colorValue, colors: newColors })
  }

  // Generate CSS for preview
  const generateCSS = (): string => {
    const { angle, colors, position, type } = colorValue

    if (type === 'solid') {
      return colors[0]?.color || defaultColor
    }

    if (type === 'linear-gradient') {
      const gradientStops = colors.map((stop) => `${stop.color} ${stop.position}%`).join(', ')
      return `linear-gradient(${angle}deg, ${gradientStops})`
    }

    if (type === 'radial-gradient') {
      const gradientStops = colors.map((stop) => `${stop.color} ${stop.position}%`).join(', ')
      return `radial-gradient(circle at ${position}, ${gradientStops})`
    }

    if (type === 'conic-gradient') {
      const gradientStops = colors.map((stop) => `${stop.color} ${stop.position}%`).join(', ')
      return `conic-gradient(from 0deg at ${position}, ${gradientStops})`
    }

    return defaultColor
  }

  // Generate styles for preview element
  const generatePreviewStyles = () => {
    const cssValue = generateCSS()

    if (forText) {
      return {
        backgroundClip: 'text',
        backgroundImage: cssValue,
        color: 'transparent',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '20px',
        textAlign: 'center' as const,
        WebkitBackgroundClip: 'text',
      } satisfies CSSProperties
    } else {
      return {
        alignItems: 'center',
        background: cssValue,
        border: '1px solid #ddd',
        borderRadius: '8px',
        display: 'flex',
        height: '120px',
        justifyContent: 'center',
        position: 'relative' as const,
      }
    }
  }

  // Background type options
  const typeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Solid Color', value: 'solid' },
    ...(solidOnly
      ? []
      : [
          { label: 'Linear Gradient', value: 'linear-gradient' },
          { label: 'Radial Gradient', value: 'radial-gradient' },
          { label: 'Conic Gradient', value: 'conic-gradient' },
        ]),
  ]

  // Position options for radial and conic gradients
  const positionOptions = [
    { label: 'Center', value: 'center' },
    { label: 'Top Left', value: 'top left' },
    { label: 'Top', value: 'top' },
    { label: 'Top Right', value: 'top right' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Bottom Left', value: 'bottom left' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom Right', value: 'bottom right' },
  ]

  return (
    <div className="color-component css-fields" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="column">
        <div
          style={{
            alignItems: 'center',
            border: '1px solid #ddd',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '8px',
            ...generatePreviewStyles(),
          }}
        >
          {forText ? sampleText : <div>Preview</div>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '49%', width: '100%' }}>
            <FieldLabel htmlFor="color-type" label={forText ? 'Text Color Type' : 'Background Type'} />
            <ReactSingleSelect
              disabled={Boolean(readOnly)}
              onChange={handleTypeChange}
              options={typeOptions}
              value={colorValue.type}
            />
          </div>

          {/* Show angle control for linear gradients */}
          {colorValue.type === 'linear-gradient' && (
            <div className="item">
              <FieldLabel htmlFor="gradient-angle" label="Angle (degrees)" />
              <div className="row" style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', gap: '8px' }}>
                <input
                  disabled={Boolean(readOnly)}
                  id="gradient-angle"
                  max="360"
                  min="0"
                  onChange={(e) => handleAngleChange(parseInt(e.target.value, 10))}
                  style={{
                    flex: 1,
                  }}
                  type="range"
                  value={colorValue.angle}
                />
                <div className="field-type number">
                  <input
                    disabled={Boolean(readOnly)}
                    max="360"
                    min="0"
                    onChange={(e) => handleAngleChange(parseInt(e.target.value, 10))}
                    step={1}
                    type="number"
                    value={colorValue.angle}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Show position control for radial and conic gradients */}
          {(colorValue.type === 'radial-gradient' || colorValue.type === 'conic-gradient') && (
            <div className="item control-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <FieldLabel htmlFor="gradient-position" label="Position" />
              <ReactSingleSelect
                disabled={Boolean(readOnly)}
                onChange={handlePositionTypeChange}
                options={positionOptions}
                value={colorValue.position}
              />
            </div>
          )}
        </div>

        {colorValue.type !== 'none' && (
          <div className="column">
            <FieldLabel label="Color Stops" />

            {/* Color stops section */}
            <div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {colorValue.type !== 'solid' && (
                <button
                  disabled={Boolean(readOnly) || colorValue.colors.length >= 10}
                  onClick={addColorStop}
                  style={{
                    borderColor: 'darkgray',
                    borderRadius: 8,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    cursor: 'pointer',
                  }}
                >
                  <LucidePlusCircle /> Add Color
                </button>
              )}

              {colorValue.colors.map((colorStop, index) => (
                <div
                  key={index}
                  style={{
                    alignItems: 'center',
                    borderColor: 'darkgray',
                    borderRadius: 8,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    height: 50,
                    justifyContent: 'center',
                    padding: 4,
                  }}
                >
                  <div className="input-row">
                    <ColorPicker color={colorStop.color} setColor={(color) => handleColorChange(index, color)} />
                  </div>

                  {colorValue.type !== 'solid' && (
                    <div
                      className="position-input field-type number row"
                      style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}
                    >
                      <input
                        disabled={Boolean(readOnly)}
                        max="100"
                        min="0"
                        onChange={(e) => handlePositionChange(index, parseInt(e.target.value, 10))}
                        type="number"
                        value={colorStop.position}
                      />
                      <span className="position-unit" style={{ marginLeft: '1px' }}>
                        %
                      </span>
                    </div>
                  )}

                  {colorValue.type !== 'solid' && colorValue.colors.length > 2 && (
                    <button
                      disabled={Boolean(readOnly)}
                      onClick={() => removeColorStop(index)}
                      style={{
                        alignItems: 'center',
                        //   backgroundColor: '#f0f0f0',
                        border: '1px solid #ddd',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        fontSize: '16px',
                        height: '24px',
                        justifyContent: 'center',
                        width: '24px',
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
