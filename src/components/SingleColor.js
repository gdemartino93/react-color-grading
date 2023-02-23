import React from 'react'
import { rgbToHex } from '../utilities/helper'

const SingleColor = ({rgb, type, weight}) => {
  return (
    <div className='col-4 d-flex justify-content-center align-items-center box' style={{ backgroundColor : rgbToHex(...rgb) }}>
        <span>{rgbToHex(...rgb)}</span>
    </div>
  )
}

export default SingleColor