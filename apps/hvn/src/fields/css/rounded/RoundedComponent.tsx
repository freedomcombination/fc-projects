'use client'

import React, { useState } from 'react'

import type { Option } from '@payloadcms/ui/elements/ReactSelect'

import { CheckboxInput, FieldLabel, ReactSelect, useField } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'

import '../styles/index.scss'

type RoundedComponentProps = TextFieldClientProps

const roundedOptions: Option[] = [
  { label: 'None', value: '0' },
  { label: 'xs', value: '0.125rem' },
  { label: 'sm', value: '0.25rem' },
  { label: 'md', value: '0.375rem' },
  { label: 'lg', value: '0.5rem' },
  { label: 'xl', value: '0.75rem' },
  { label: '2xl', value: '1rem' },
  { label: '3xl', value: '1.5rem' },
  { label: 'full', value: '9999px' },
]

export const RoundedComponent: React.FC<RoundedComponentProps> = ({ field, path: basePath, readOnly }) => {
  const path = basePath || field.name
  const { setValue, value } = useField<string>({ path })

  const [useSelect, setUseSelect] = useState(false)

  const [leftTop = '0', rightTop = '0', rightBottom = '0', leftBottom = '0'] = (value || '0;0;0;0').split(';')

  const valueAll = leftTop === rightTop && rightTop === rightBottom && rightBottom === leftBottom ? leftTop : '0'

  const fieldGroups = [
    [{ label: 'All', update: (v: string) => `${v};${v};${v};${v}`, value: valueAll }],
    [
      { label: 'Left-Top', update: (v: string) => `${v};${rightTop};${rightBottom};${leftBottom}`, value: leftTop },
      { label: 'Right-Top', update: (v: string) => `${leftTop};${v};${rightBottom};${leftBottom}`, value: rightTop },
      { label: 'Right-Bottom', update: (v: string) => `${leftTop};${rightTop};${v};${leftBottom}`, value: rightBottom },
      { label: 'Left-Bottom', update: (v: string) => `${leftTop};${rightTop};${rightBottom};${v}`, value: leftBottom },
    ],
  ]

  return (
    <div className="css-fields">
      <div className="column">
        <div className="row">
          <CheckboxInput
            checked={useSelect}
            onToggle={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUseSelect(event.target.checked)
            }}
            readOnly={readOnly}
          />
          <FieldLabel label={'Use Presets'} />
        </div>
        {fieldGroups.map((fieldGroup, groupIndex) => (
          <div className={'row'} key={groupIndex}>
            {fieldGroup.map((field, fieldIndex) => (
              <div className={'item field-type select number'} key={fieldIndex}>
                <FieldLabel htmlFor={field.label.toLowerCase()} label={field.label} />
                {useSelect ? (
                  <ReactSelect
                    disabled={Boolean(readOnly)}
                    isMulti={false}
                    onChange={(e) =>
                      setValue(field.update(((Array.isArray(e) ? e[0]?.value : e.value) as string) || '0'))
                    }
                    options={roundedOptions}
                    value={roundedOptions.find((opt) => opt.value === field.value)}
                  />
                ) : (
                  <input
                    disabled={Boolean(readOnly)}
                    id={`field-${path.replace(/\./g, '__')}_${field.label.toLowerCase()}`}
                    name={path}
                    onChange={(e: { target: { value: string } }) => setValue(field.update(e.target.value))}
                    step={0.1}
                    type="number"
                    value={field.value}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
