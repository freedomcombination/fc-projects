import { FC } from 'react'

import { Popup } from '@payloadcms/ui'
import Sketch from '@uiw/react-color-sketch'
import { debounce } from 'lodash'

type ColorPickerProps = {
  color?: string
  setColor?: (color: string) => void
  showHexValue?: boolean
}

export const ColorPicker: FC<ColorPickerProps> = ({ color, setColor = () => {}, showHexValue = false }) => {
  const updateColor = debounce((color: string) => setColor(color), 300)

  return (
    <Popup
      button={
        <div
          style={{
            alignItems: 'center',
            backgroundColor: color,
            border: '1px solid #ccc',
            borderRadius: 4,
            cursor: 'pointer',
            display: 'flex',
            height: 32,
            justifyContent: 'center',
            padding: 0,
            width: 64,
          }}
        >
          <span
            style={{
              backgroundColor: 'rgba(0,0,0,0.2)',
            }}
          >
            {showHexValue && color}
          </span>
        </div>
      }
      render={() => <Sketch color={color} onChange={(colorResult) => updateColor(colorResult.hex)} />}
    />
  )
}
