import React, { useState } from 'react'
import { rgbToHex } from '../utilities/helper'

const SingleColor = ({rgb, type, weight}) => {
  const [textColor , setTextColor] = useState(false);
  // creiamo la funzione per copiare il colore
  const copiaColore = (e) => {
    navigator.clipboard
      .writeText(rgbToHex(...rgb))
      // se la promise ha successo cambiamo lo stato in true
      .then(()=>{
        setTextColor(true)
        setInterval(() => {
          setTimeout(setTextColor(false))
        }, 2000);
        console.log(e.event)
      } )
      .catch(err => console.log(err));
  };
  return (
    // create 3 classi con lo stesso nome dei valori di type per gestire il nome del colore e fare in modo che si legge con qualsiasi colore/sfumatura.
    // Passiamo type tra le classi
    
    <div className={`col-2 my-3 d-flex justify-content-center align-items-center box ${type}`} 
    // passiamo rgb con lo spread operator poichè rgb è un array 
    style={{ backgroundColor : rgbToHex(...rgb) }}>

        <span style={{ cursor : 'pointer' }} onClick={copiaColore}>
          
          {
            // textcolor diventa vero al click quindi viene mostrato al posto del colore, dopo 3 secondi ritorna falso e viene mostrato nuovamente il codice del colore
            (textColor) ? 'Messaggio copiato' : rgbToHex(...rgb)
          }
          </span>
    </div>
  )
}

export default SingleColor