import React , { useState } from 'react';
import { v4 } from 'uuid';
import Values from 'values.js'


const ColorGrading = () => {
  const color = new Values('rgba(0,0,0,0.5)');
  console.log(color);
  const [colorInput , setColorInput] = useState({
    color : "red",
    qty : 5
  })
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {
    const { name , value} = e.target;
    setColorInput({...colorInput,
    [name]: value,})
    

  }

  return <>
    <form className='d-flex align-items-center gap-2 p-3' onSubmit={handleSubmit} >
        <div className='d-flex gap-3'>
            <input
              type="text"
              id='color'
              name='color'
              value={colorInput.color}
              maxLength={7}
              onChange={handleChange}
              >
            </input>
            <input
             type="number"
             name='qty'
             id='qty'
             min={5}
             max={100}
             step={5}
             value={colorInput.qty} 
             onChange = {handleChange}
             >

             </input>
        </div>
        <button className='btn btn-success' type='submit'> Select</button>

    </form>
  </>
}

export default ColorGrading