import React from 'react'
import { BsStars } from "react-icons/bs";

const Menu = () => {
  return (
    <div className='py-5 h-[3rem] backdrop-blur-md flex justify-between items-center sticky top-0 px-5'>
        <p className='text-white text-lg font-bold'>Inicio</p>
        <BsStars className='text-white'></BsStars>
    </div>
  )
}

export default Menu