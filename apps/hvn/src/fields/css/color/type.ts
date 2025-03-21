import { TextFieldClientProps } from 'payload'

export type BackgroundType = 'none' | 'solid' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient'

export type GradientStop = {
  color: string
  position: number
}

export type ColorValueType = {
  type: BackgroundType
  colors: GradientStop[]
  angle?: number
  position?: string
}

export type ColorComponentProps = TextFieldClientProps & {
  defaultColor?: string
  forText?: boolean
  sampleText?: string
  solidOnly?: boolean
}
