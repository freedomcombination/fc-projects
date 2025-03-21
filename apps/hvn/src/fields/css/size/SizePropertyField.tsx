import React from 'react'

import type { Option } from '@payloadcms/ui/elements/ReactSelect'

import { FieldLabel } from '@payloadcms/ui'

import { ReactSingleSelect } from '../common/ReactSingleSelect'

// Unit options
const unitOptions: Option[] = [
  { label: 'Custom', value: 'custom' },
  { label: 'px', value: 'px' },
  { label: '%', value: '%' },
  { label: 'rem', value: 'rem' },
  { label: 'em', value: 'em' },
  { label: 'vw', value: 'vw' },
  { label: 'vh', value: 'vh' },
  { label: 'auto', value: 'auto' },
]

interface SizePropertyFieldProps {
  name: string
  label: string
  value: string
  unit: string
  usePreset: boolean
  preset: string
  presetOptions: Option[]
  onValueChange: (value: string) => void
  onUnitChange: (option: Option | null) => void
  onPresetChange: (option: Option | null) => void
  onTogglePreset: () => void
  readOnly?: boolean
}

export const SizePropertyField: React.FC<SizePropertyFieldProps> = ({
  label,
  name,
  onPresetChange,
  onTogglePreset,
  onUnitChange,
  onValueChange,
  preset,
  presetOptions,
  readOnly = false,
  unit,
  usePreset,
  value,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        width: '100%',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <FieldLabel htmlFor={`${name}-toggle`} label={label} />
        <button
          disabled={readOnly}
          id={`${name}-toggle`}
          onClick={onTogglePreset}
          style={{
            background: 'none',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.75rem',
            padding: '4px 8px',
            ...(usePreset ? { backgroundColor: 'var(--theme-elevation-100)' } : {}),
          }}
          type="button"
        >
          {usePreset ? 'Preset' : 'Custom'}
        </button>
      </div>

      {usePreset ? (
        <div style={{ width: '100%' }}>
          <ReactSingleSelect
            disabled={readOnly}
            onChange={onPresetChange}
            options={presetOptions}
            placeholder="Select a preset..."
            value={preset}
          />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            width: '100%',
          }}
        >
          {unit === 'auto' ? (
            <div
              style={{
                alignItems: 'center',
                backgroundColor: 'var(--theme-elevation-50)',
                border: '1px solid var(--theme-elevation-150)',
                borderRadius: '4px',
                color: 'var(--theme-elevation-500)',
                display: 'flex',
                flex: '2',
                fontStyle: 'italic',
                padding: '0.5rem',
              }}
            >
              <span>Auto</span>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flex: '2',
              }}
            >
              {unit === 'custom' ? (
                <input
                  disabled={readOnly}
                  id={`${name}-custom-value`}
                  onChange={(e) => onValueChange(e.target.value)}
                  placeholder="e.g. calc(100vh - 20px)"
                  style={{
                    border: '1px solid var(--theme-elevation-150)',
                    borderRadius: '4px',
                    padding: '0.5rem',
                    width: '100%',
                  }}
                  type="text"
                  value={value}
                />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <input
                    disabled={readOnly}
                    id={`${name}-value`}
                    min="0"
                    onChange={(e) => onValueChange(e.target.value)}
                    step="1"
                    style={{
                      border: '1px solid var(--theme-elevation-150)',
                      borderRadius: '4px 0 0 4px',
                      borderRight: 'none',
                      flex: '1',
                      padding: '0.5rem',
                    }}
                    type="number"
                    value={value}
                  />
                  <span
                    style={{
                      alignItems: 'center',
                      backgroundColor: 'var(--theme-elevation-50)',
                      border: '1px solid var(--theme-elevation-150)',
                      borderRadius: '0 4px 4px 0',
                      display: 'flex',
                      padding: '0 0.5rem',
                    }}
                  >
                    {unit}
                  </span>
                </div>
              )}
            </div>
          )}

          <div style={{ flex: '1' }}>
            <ReactSingleSelect
              disabled={readOnly}
              onChange={onUnitChange}
              options={unitOptions}
              placeholder="Unit"
              value={unit || (unitOptions[0]!.value as string)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
