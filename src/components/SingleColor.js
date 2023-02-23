import React from 'react'
import { rgbToHex } from '../utilities/helper'

const SingleColor = ({rgb, type, weight}) => {
  return (
    <div className='col-4' style={{ backgroundColor : rgbToHex(...rgb) }}>
        <span>{rgbToHex(...rgb)}</span>
    </div>
  )
}

export default SingleColor