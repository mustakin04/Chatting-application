import React from 'react'
import { FaPlus } from "react-icons/fa";

const PlusButton = () => {
  return (
    <div className=' flex justify-center items-center w-[30px] h-[30px] bg-homecolor rounded'>
        <FaPlus className='text-white' />
    </div>
  )
}

export default PlusButton