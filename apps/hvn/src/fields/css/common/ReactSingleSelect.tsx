import { FC } from 'react'

import type { Option } from '@payloadcms/ui/elements/ReactSelect'

import { ReactSelect } from '@payloadcms/ui'

type ReactSingleSelectProps = {
  options: Option[]
  value: string | undefined
  onChange: (value: Option) => void
  disabled?: boolean
  placeholder?: string
}

export const ReactSingleSelect: FC<ReactSingleSelectProps> = ({ onChange: handleChange, options, value, ...rest }) => {
  const onChange = (value: Option | Option[]) => {
    const val = Array.isArray(value) ? value[0]! : value
    handleChange(val)
  }

  return (
    <ReactSelect
      isMulti={false}
      onChange={onChange}
      options={options}
      value={options.find((option) => option.value === value)}
      {...rest}
    />
  )
}
