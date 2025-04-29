import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color={snap.color}
      presetColors={[
        '#D3D3D3',
        '#000000',
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#FFFF00',
        '#FF00FF',
        '#00FFFF',
        '#FFA500',
        '#800080',
      ]}
      disableAlpha
      onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker