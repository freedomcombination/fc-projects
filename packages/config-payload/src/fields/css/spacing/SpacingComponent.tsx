'use client'

import React from 'react'

import { FieldLabel, useField } from '@payloadcms/ui'
import { debounce } from 'lodash'

import '../styles/index.scss'
import { ColorPicker } from '../common/ColorPicker'
import { SpacingComponentProps, SpacingValueType } from './types'

export const SpacingComponent: React.FC<SpacingComponentProps> = ({
  color = true,
  field,
  path: basePath,
  readOnly,
}) => {
  const path = basePath || field.name
  const { setValue, value } = useField<string>({ path })

  let parsedValue: SpacingValueType = { colors: {}, widths: {} }

  try {
    if (value) {
      parsedValue = JSON.parse(value) as SpacingValueType
    }
  } catch {
    parsedValue = {
      colors: { bottom: '#000000', left: '#000000', right: '#000000', top: '#000000' },
      widths: { bottom: '0', left: '0', right: '0', top: '0' },
    }
  }

  const { colors = {}, widths = {} } = parsedValue

  const fields = [
    [
      {
        colorValue:
          colors.left === colors.top && colors.top === colors.right && colors.right === colors.bottom
            ? colors.left
            : '#000000',
        key: 'all',
        label: 'All',
        widthValue:
          widths.left === widths.top && widths.top === widths.right && widths.right === widths.bottom
            ? widths.left
            : '0',
      },
    ],
    [
      {
        colorValue: colors.left === colors.right ? colors.left : '#000000',
        key: 'x',
        label: 'X',
        widthValue: widths.left === widths.right ? widths.left : '0',
      },
      {
        colorValue: colors.top === colors.bottom ? colors.top : '#000000',
        key: 'y',
        label: 'Y',
        widthValue: widths.top === widths.bottom ? widths.top : '0',
      },
    ],
    [
      { colorValue: colors.left, key: 'left', label: 'Left', widthValue: widths.left },
      { colorValue: colors.top, key: 'top', label: 'Top', widthValue: widths.top },
      { colorValue: colors.right, key: 'right', label: 'Right', widthValue: widths.right },
      { colorValue: colors.bottom, key: 'bottom', label: 'Bottom', widthValue: widths.bottom },
    ],
  ]

  const updateWidth = (key: string, newValue: string) => {
    const newParsedValue = { ...parsedValue }

    if (key === 'all') {
      newParsedValue.widths = {
        bottom: newValue,
        left: newValue,
        right: newValue,
        top: newValue,
      }
    } else if (key === 'x') {
      newParsedValue.widths = {
        ...newParsedValue.widths,
        left: newValue,
        right: newValue,
      }
    } else if (key === 'y') {
      newParsedValue.widths = {
        ...newParsedValue.widths,
        bottom: newValue,
        top: newValue,
      }
    } else {
      newParsedValue.widths = {
        ...newParsedValue.widths,
        [key]: newValue,
      }
    }

    setValue(JSON.stringify(newParsedValue))
  }

  const updateColor = debounce((key: string, newValue: string) => {
    const newParsedValue = { ...parsedValue }

    if (key === 'all') {
      newParsedValue.colors = {
        bottom: newValue,
        left: newValue,
        right: newValue,
        top: newValue,
      }
    } else if (key === 'x') {
      newParsedValue.colors = {
        ...newParsedValue.colors,
        left: newValue,
        right: newValue,
      }
    } else if (key === 'y') {
      newParsedValue.colors = {
        ...newParsedValue.colors,
        bottom: newValue,
        top: newValue,
      }
    } else {
      newParsedValue.colors = {
        ...newParsedValue.colors,
        [key]: newValue,
      }
    }

    setValue(JSON.stringify(newParsedValue))
  }, 300)

  return (
    <div className="css-fields">
      <div className="column">
        {fields.map((fieldGroup, groupIndex) => (
          <div className="row" key={groupIndex}>
            {fieldGroup.map((field) => (
              <div className="item field-type number" key={field.key}>
                <FieldLabel htmlFor={`field-${path.replace(/\./g, '__')}_${field.key}`} label={field.label} />
                <div className="row input-row">
                  {color && (
                    <ColorPicker
                      color={field.colorValue}
                      setColor={(color) => updateColor(field.key as KeyType, color)}
                    />
                  )}
                  <input
                    disabled={Boolean(readOnly)}
                    id={`field-${path.replace(/\./g, '__')}_${field.key}`}
                    name={`${path}_${field.key}`}
                    onChange={(e) => updateWidth(field.key as KeyType, e.target.value)}
                    step={0.1}
                    type="number"
                    value={field.widthValue}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
