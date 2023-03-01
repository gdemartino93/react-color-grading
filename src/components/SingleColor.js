import React, { useState } from 'react'
import { rgbToHex } from '../utilities/helper'

const SingleColor = ({rgb, type, weight}) => {
  const [textColor , setTextColor] = useState(false);
  // creiamo la funzione per copiare il colore
  const copiaColore = () => {
    navigator.clipboard
      .writeText(rgbToHex(...rgb))
      // se la promise ha successo cambiamo lo stato in true
      .then(()=> setTextColor(true))
      .catch(err => console.log(err));
  };
  return (
    // create 3 classi con lo stesso nome dei valori di type per gestire il nome del colore e fare in modo che si legge con qualsiasi colore/sfumatura.
    // Passiamo type tra le classi
    
    <div className={`col-2 col- my-5 d-flex justify-content-center align-items-center box ${type}`} 
    // passiamo rgb con lo spread operator poichè rgb è un array 
    style={{ backgroundColor : rgbToHex(...rgb) }}>

        <span style={{ cursor : 'pointer' }} onClick={copiaColore}>{rgbToHex(...rgb)}</span>
    </div>
  )
}

export default SingleColor