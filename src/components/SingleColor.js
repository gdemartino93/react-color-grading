import React from 'react'
import { rgbToHex } from '../utilities/helper'

const SingleColor = ({rgb, type, weight}) => {
  return (
    // create 3 classi con lo stesso nome dei valori di type per gestire il nome del colore e fare in modo che si legge con qualsiasi colore/sfumatura.
    // Passiamo type tra le classi
    <div className={`col-4 d-flex justify-content-center align-items-center box ${type}`} 
    // passiamo rgb con lo spread operator poichè rgb è un array 
    style={{ backgroundColor : rgbToHex(...rgb) }}>

        <span>{rgbToHex(...rgb)}</span>
    </div>
  )
}

export default SingleColor