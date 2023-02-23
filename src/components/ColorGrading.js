import React , { useState } from 'react';



const ColorGrading = () => {
  return <>
    <form className='d-flex align-items-center gap-2 p-3'>
        <div className='d-flex gap-3'>
            <input type="text" value="0" ></input>
            <input type="text" value="0" ></input>
        </div>
        <button className='btn btn-success' type='submit'> Select</button>

    </form>
  </>
}

export default ColorGrading