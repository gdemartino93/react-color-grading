import React , { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import {uuid as keyid} from 'react-uuid';
import Values from 'values.js'
import SingleColor from './SingleColor';


const ColorGrading = () => {
  const [isError , setIsError] = useState(false);

  const [colorInput , setColorInput] = useState({
    color : "",
    qty : 5
  });
  const [selectedColor , setSelectedColor] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( colorInput.color && colorInput.qty){
      const {color , qty } = colorInput;
      try {
        setSelectedColor(
          new Values(color).all(Math.round(100 / parseInt(qty,10)) * 2 )
        )         
      } catch (error) {
        setIsError(true)
      }

    }

  }
  const handleChange = (e) => {
    setIsError(false)
    const { name , value} = e.target;
    setColorInput({...colorInput,
    [name]: value,})
  
  }
  useEffect(()=>{
    setColorInput({qty : 5, color:''})
    setSelectedColor(
      new Values('#1194ec').all(Math.round(100 / parseInt(10 ,10)) * 2 )
    )  
  },[])
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
      <div className='d-flex flex-wrap justify-content-around gap-1'>

        {
          (isError) ? <h2 className='text-danger fw-bold fs-1'>Error </h2> :           selectedColor.length > 0 ?
          (selectedColor.map((el) => <SingleColor key={keyid} {...el} />))
          : "Loading..."
        }
        {

        }

      </div>

    </div>
  </>
}

export default ColorGrading