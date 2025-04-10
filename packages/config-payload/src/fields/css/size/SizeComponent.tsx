'use client'

import React, { useEffect, useState } from 'react'

import type { Option } from '@payloadcms/ui/elements/ReactSelect'

import { useField } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'

import { SizePropertyField } from './SizePropertyField'
import '../styles/index.scss'

type SizeComponentProps = TextFieldClientProps

// Properties to manage
const sizeProperties = [
  { label: 'Width', name: 'width' },
  { label: 'Height', name: 'height' },
  { cssName: 'min-width', label: 'Min Width', name: 'minWidth' },
  { cssName: 'max-width', label: 'Max Width', name: 'maxWidth' },
  { cssName: 'min-height', label: 'Min Height', name: 'minHeight' },
  { cssName: 'max-height', label: 'Max Height', name: 'maxHeight' },
]

// Preset size options
const presetSizeOptions: { [key: string]: Option[] } = {
  height: [
    { label: 'Auto', value: 'auto' },
    { label: 'Full (100%)', value: '100%' },
    { label: 'Half (50%)', value: '50%' },
    { label: 'Fit Content', value: 'fit-content' },
  ],
  maxHeight: [
    { label: 'None', value: 'none' },
    { label: 'Full (100%)', value: '100%' },
    { label: 'Min Content', value: 'min-content' },
    { label: 'Max Content', value: 'max-content' },
  ],
  maxWidth: [
    { label: 'None', value: 'none' },
    { label: 'Full (100%)', value: '100%' },
    { label: 'Half (50%)', value: '50%' },
    { label: 'Min Content', value: 'min-content' },
    { label: 'Max Content', value: 'max-content' },
  ],
  minHeight: [
    { label: 'None (0)', value: '0' },
    { label: 'Full (100%)', value: '100%' },
    { label: 'Min Content', value: 'min-content' },
  ],
  minWidth: [
    { label: 'None (0)', value: '0' },
    { label: 'Full (100%)', value: '100%' },
    { label: 'Min Content', value: 'min-content' },
    { label: 'Max Content', value: 'max-content' },
  ],
  width: [
    { label: 'Auto', value: 'auto' },
    { label: 'Full (100%)', value: '100%' },
    { label: 'Half (50%)', value: '50%' },
    { label: 'Quarter (25%)', value: '25%' },
    { label: 'Fit Content', value: 'fit-content' },
  ],
}

interface SizePropertyValue {
  value: string
  unit: string
  usePreset: boolean
  preset: string
}

interface SizeValueType {
  [key: string]: SizePropertyValue
}

export const SizeComponent: React.FC<SizeComponentProps> = ({ field, path: basePath, readOnly }) => {
  const path = basePath || field.name
  const { setValue, value } = useField<string>({ path })

  const defaultSizeValues: SizeValueType = Object.fromEntries(
    sizeProperties.map((prop) => [prop.name, { preset: '', unit: 'custom', usePreset: false, value: '' }]),
  )

  const parseValue = (): SizeValueType => {
    if (!value) return defaultSizeValues
    try {
      return JSON.parse(value)
    } catch {
      return defaultSizeValues
    }
  }

  const [sizeValues, setSizeValues] = useState<SizeValueType>(parseValue())

  useEffect(() => {
    setValue(JSON.stringify(sizeValues))
  }, [sizeValues, setValue])

  const handleTogglePreset = (property: string) => {
    setSizeValues((prev) => {
      const newValues = { ...prev }
      const oldValue = prev[property]!
      newValues[property] = {
        ...oldValue,
        usePreset: !oldValue.usePreset,
      } as SizePropertyValue
      return newValues
    })
  }

  const handlePresetChange = (property: string) => (option: Option | null) => {
    if (!option) return

    setSizeValues((prev) => {
      const newValues = { ...prev }
      newValues[property] = {
        ...prev[property],
        preset: option.value as string,
      } as SizePropertyValue
      return newValues
    })
  }

  const handleUnitChange = (property: string) => (option: Option | null) => {
    if (!option) return

    const newUnit = option.value as string

    setSizeValues((prev) => {
      const newValues = { ...prev }
      newValues[property] = {
        ...prev[property],
        unit: newUnit,
        ...(newUnit === 'auto' ? { value: '' } : {}),
      } as SizePropertyValue
      return newValues
    })
  }

  const handleValueChange = (property: string) => (newValue: string) => {
    setSizeValues((prev) => {
      const newValues = { ...prev }
      newValues[property] = {
        ...prev[property],
        value: newValue,
      } as SizePropertyValue
      return newValues
    })
  }

  const propertyGroups = [
    [sizeProperties[0]!, sizeProperties[1]!], // width, height
    [sizeProperties[2]!, sizeProperties[3]!], // minWidth, maxWidth
    [sizeProperties[4]!, sizeProperties[5]!], // minHeight, maxHeight
  ]

  return (
    <div className="css-fields size-fields" style={{ width: '100%' }}>
      <div
        className="column"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          width: '100%',
        }}
      >
        {propertyGroups.map((group, groupIndex) => (
          <div
            className="property-group-row"
            key={`group-${groupIndex}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              width: '100%',
            }}
          >
            {group.map(({ label, name }) => (
              <div
                className="property-column"
                key={name}
                style={{
                  flex: '1',
                  minWidth: '0',
                }}
              >
                <SizePropertyField
                  label={label}
                  name={name}
                  onPresetChange={handlePresetChange(name)}
                  onTogglePreset={() => handleTogglePreset(name)}
                  onUnitChange={handleUnitChange(name)}
                  onValueChange={handleValueChange(name)}
                  presetOptions={presetSizeOptions[name]!}
                  readOnly={Boolean(readOnly)}
                  {...sizeValues[name]!}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
