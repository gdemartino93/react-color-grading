import React , { useState } from 'react';
import { v4 } from 'uuid';
import Values from 'values.js'
import SingleColor from './SingleColor';


const ColorGrading = () => {

  const [colorInput , setColorInput] = useState({
    color : "red",
    qty : 0
  });
  const [selectedColor , setSelectedColor] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if ( colorInput.color && colorInput.qty){
      const {color , qty } = colorInput;
      setSelectedColor(
        new Values(color).all(Math.round(100 / parseInt(qty,10)) * 2 )
      )  
    }

  }
  const handleChange = (e) => {
    const { name , value} = e.target;
    setColorInput({...colorInput,
    [name]: value,})
  
  }
  console.log(selectedColor);
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
    <div className='container'>
        {
          selectedColor > 0 ?
          (selectedColor.map(el => <SingleColor key={v4} {...el} />))
          : "Loading..."
        }
    </div>
  </>
}

export default ColorGrading