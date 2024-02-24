import React, { useEffect, useState } from 'react'
import './css.css'

function Navbar() {

  const [show, handleshow]= useState([false])
  const stickynav=()=>{
    if (window.scrollY>200){
      handleshow(true)
    } 
    else{
      handleshow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", stickynav)
return ()=>window.addEventListener("scroll", stickynav)
  })




  return (

    
    <div className={`nav ${show && 'navblack'}`}>
      <div className='nav-contents'>
      <h1 className='text-red-600' text-4xl font-bold cursor-pointer >NETFLIX</h1>

      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
