import React from 'react'
import { FaPlus } from "react-icons/fa";

const PlusButton = () => {
  return (
    <div className=' flex justify-center items-center w-[30px] h-[30px] bg-[#5F35F5]'>
        <FaPlus className='text-white' />
    </div>
  )
}

export default PlusButton