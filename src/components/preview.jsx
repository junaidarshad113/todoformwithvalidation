import React, { useState } from 'react'
const Preview = ({file}) => {
    const [preview , setPreview]=useState()
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        if (reader.readyState === 2)
        setPreview(reader.result)
    }
  return (
    <div align="center" className='mb-2 '>
       <div >{preview ? <img src={preview} className="rounded "  alt="preview" width="50px" height="50px"  /> : "Loading" }</div>



    </div>
  )
}

export default Preview