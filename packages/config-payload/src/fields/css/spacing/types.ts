import { JSONFieldClientProps } from 'payload'

export type SpacingComponentProps = JSONFieldClientProps & {
  color?: boolean
}

export type SpacingDetailProp = {
  left?: string
  right?: string
  top?: string
  bottom?: string
}

export type SpacingValueType = {
  widths?: SpacingDetailProp
  colors?: SpacingDetailProp
}
