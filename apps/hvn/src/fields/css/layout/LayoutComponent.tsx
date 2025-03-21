'use client'

import React, { useEffect, useState } from 'react'

import type { Option } from '@payloadcms/ui/elements/ReactSelect'

import { FieldLabel, useField } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'

import '../styles/index.scss'
import { ReactSingleSelect } from '../common/ReactSingleSelect'

type LayoutComponentProps = TextFieldClientProps

// Layout type options
const layoutTypeOptions: Option[] = [
  { label: 'None', value: 'none' },
  { label: 'Flex', value: 'flex' },
  { label: 'Grid', value: 'grid' },
]

// Flex direction options
const flexDirectionOptions: Option[] = [
  { label: 'Row', value: 'row' },
  { label: 'Column', value: 'column' },
  { label: 'Row Reverse', value: 'row-reverse' },
  { label: 'Column Reverse', value: 'column-reverse' },
]

// Flex wrap options
const flexWrapOptions: Option[] = [
  { label: 'No Wrap', value: 'nowrap' },
  { label: 'Wrap', value: 'wrap' },
  { label: 'Wrap Reverse', value: 'wrap-reverse' },
]

// Justify content options
const justifyContentOptions: Option[] = [
  { label: 'Start', value: 'flex-start' },
  { label: 'End', value: 'flex-end' },
  { label: 'Center', value: 'center' },
  { label: 'Space Between', value: 'space-between' },
  { label: 'Space Around', value: 'space-around' },
  { label: 'Space Evenly', value: 'space-evenly' },
]

// Align items options
const alignItemsOptions: Option[] = [
  { label: 'Start', value: 'flex-start' },
  { label: 'End', value: 'flex-end' },
  { label: 'Center', value: 'center' },
  { label: 'Baseline', value: 'baseline' },
  { label: 'Stretch', value: 'stretch' },
]

// Grid template columns presets
const gridTemplateColumnsOptions: Option[] = [
  { label: 'None', value: 'none' },
  { label: '1 Column', value: '1fr' },
  { label: '2 Columns', value: '1fr 1fr' },
  { label: '3 Columns', value: '1fr 1fr 1fr' },
  { label: '4 Columns', value: '1fr 1fr 1fr 1fr' },
  { label: 'Custom', value: 'custom' },
]

// Grid template rows presets
const gridTemplateRowsOptions: Option[] = [
  { label: 'None', value: 'none' },
  { label: '1 Row', value: '1fr' },
  { label: '2 Rows', value: '1fr 1fr' },
  { label: '3 Rows', value: '1fr 1fr 1fr' },
  { label: '4 Rows', value: '1fr 1fr 1fr 1fr' },
  { label: 'Custom', value: 'custom' },
]

// Gap size options
const gapOptions: Option[] = [
  { label: 'None', value: '0' },
  { label: 'xs', value: '0.25rem' },
  { label: 'sm', value: '0.5rem' },
  { label: 'md', value: '1rem' },
  { label: 'lg', value: '1.5rem' },
  { label: 'xl', value: '2rem' },
  { label: '2xl', value: '3rem' },
]

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ field, path: basePath, readOnly }) => {
  const path = basePath || field.name
  const { setValue, value } = useField<string>({ path })

  const parseValue = () => {
    if (!value) return defaultValues
    try {
      return JSON.parse(value)
    } catch {
      return defaultValues
    }
  }

  const defaultValues = {
    alignItems: 'stretch',
    customGridTemplateColumns: '',
    customGridTemplateRows: '',
    // Flex properties
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // Common properties
    gap: '0',
    // Grid properties
    gridTemplateColumns: 'none',
    gridTemplateRows: 'none',
    justifyContent: 'flex-start',
    type: 'none',
  }

  const [layoutValues, setLayoutValues] = useState(parseValue())
  const [customGridColumns, setCustomGridColumns] = useState(false)
  const [customGridRows, setCustomGridRows] = useState(false)

  useEffect(() => {
    setValue(JSON.stringify(layoutValues))
  }, [layoutValues, setValue])

  const handleLayoutTypeChange = (option: Option | Option[] | null) => {
    if (!option || Array.isArray(option)) return
    setLayoutValues({
      ...layoutValues,
      type: option.value,
    })
  }

  const handleSelectChange = (property: string) => (option: Option | Option[] | null) => {
    if (!option || Array.isArray(option)) return

    const newValues = { ...layoutValues, [property]: option.value }

    if (property === 'gridTemplateColumns' && option.value === 'custom') {
      setCustomGridColumns(true)
    } else if (property === 'gridTemplateColumns' && option.value !== 'custom') {
      setCustomGridColumns(false)
    }

    if (property === 'gridTemplateRows' && option.value === 'custom') {
      setCustomGridRows(true)
    } else if (property === 'gridTemplateRows' && option.value !== 'custom') {
      setCustomGridRows(false)
    }

    setLayoutValues(newValues)
  }

  const handleCustomInputChange = (property: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setLayoutValues({
      ...layoutValues,
      [property]: e.target.value,
    })
  }

  return (
    <div className="css-fields layout-fields">
      <div className="column">
        {/* Layout Type Selector */}
        <div className="row">
          <div className="item field-type select">
            <FieldLabel htmlFor="layout-type" label="Layout Type" />
            <ReactSingleSelect
              disabled={Boolean(readOnly)}
              onChange={handleLayoutTypeChange}
              options={layoutTypeOptions}
              value={layoutValues.type}
            />
          </div>
        </div>

        {/* Flex Layout Options */}
        {layoutValues.type === 'flex' && (
          <>
            <div className="row">
              <div className="item field-type select">
                <FieldLabel htmlFor="flex-direction" label="Direction" />
                <ReactSingleSelect
                  disabled={Boolean(readOnly)}
                  onChange={handleSelectChange('flexDirection')}
                  options={flexDirectionOptions}
                  value={layoutValues.flexDirection}
                />
              </div>
              <div className="item field-type select">
                <FieldLabel htmlFor="flex-wrap" label="Wrap" />
                <ReactSingleSelect
                  disabled={Boolean(readOnly)}
                  onChange={handleSelectChange('flexWrap')}
                  options={flexWrapOptions}
                  value={layoutValues.flexWrap}
                />
              </div>
            </div>
            <div className="row">
              <div className="item field-type select">
                <FieldLabel htmlFor="justify-content" label="Justify Content" />
                <ReactSingleSelect
                  disabled={Boolean(readOnly)}
                  onChange={handleSelectChange('justifyContent')}
                  options={justifyContentOptions}
                  value={layoutValues.justifyContent}
                />
              </div>
              <div className="item field-type select">
                <FieldLabel htmlFor="align-items" label="Align Items" />
                <ReactSingleSelect
                  disabled={Boolean(readOnly)}
                  onChange={handleSelectChange('alignItems')}
                  options={alignItemsOptions}
                  value={layoutValues.alignItems}
                />
              </div>
            </div>
          </>
        )}

        {/* Grid Layout Options */}
        {layoutValues.type === 'grid' && (
          <>
            <div className="row">
              <div className="item field-type select">
                <FieldLabel htmlFor="grid-template-columns" label="Template Columns" />
                <ReactSingleSelect
                  disabled={Boolean(readOnly)}
                  onChange={handleSelectChange('gridTemplateColumns')}
                  options={gridTemplateColumnsOptions}
                  value={customGridColumns ? 'custom' : layoutValues.gridTemplateColumns}
                />
              </div>
              {customGridColumns && (
                <div className="item field-type text">
                  <FieldLabel htmlFor="custom-grid-columns" label="Custom Columns" />
                  <input
                    disabled={Boolean(readOnly)}
                    id="custom-grid-columns"
                    onChange={handleCustomInputChange('customGridTemplateColumns')}
                    placeholder="e.g., 1fr 2fr 1fr"
                    type="text"
                    value={layoutValues.customGridTemplateColumns}
                  />
                </div>
              )}
            </div>
            <div className="row">
              <div className="item field-type select">
                <FieldLabel htmlFor="grid-template-rows" label="Template Rows" />
                <ReactSingleSelect
                  disabled={Boolean(readOnly)}
                  onChange={handleSelectChange('gridTemplateRows')}
                  options={gridTemplateRowsOptions}
                  value={customGridRows ? 'custom' : layoutValues.gridTemplateRows}
                />
              </div>
              {customGridRows && (
                <div className="item field-type text">
                  <FieldLabel htmlFor="custom-grid-rows" label="Custom Rows" />
                  <input
                    disabled={Boolean(readOnly)}
                    id="custom-grid-rows"
                    onChange={handleCustomInputChange('customGridTemplateRows')}
                    placeholder="e.g., auto 1fr 2fr"
                    type="text"
                    value={layoutValues.customGridTemplateRows}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {/* Common Layout Options (Gap) - Only show if not "none" */}
        {layoutValues.type !== 'none' && (
          <div className="row">
            <div className="item field-type select">
              <FieldLabel htmlFor="gap" label="Gap" />
              <ReactSingleSelect
                disabled={Boolean(readOnly)}
                onChange={handleSelectChange('gap')}
                options={gapOptions}
                value={layoutValues.gap}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
