import React from 'react'
import image1 from "../../../src/assets/Ellipse 1.png"
import { IoHomeOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LiaFolderOpen } from "react-icons/lia";



const Sliderbar = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[186px] h-[954px] bg-[#5F35F5]'>
                    <img className='text-center px-[43px] pt-[38px]' src={image1} alt="" />
                    <div className='flex w-[155px] h-[89px] bg-white rounded-l-lg ml-[22px] mt-[78px] mb-[57px]'>
                        <IoHomeOutline className='text-[#5F35F5] m-auto items-center w-[46px]  h-[100px]' />
                    </div>
                    <div >
                        <RiMessage2Line className='bg-white w-[46px] h-[46px] m-auto' />
                    </div>
                    <div >
                        <IoMdNotificationsOutline className='bg-[#5F35F5] text-white w-[46px] h-[50px] m-auto my-[83px]' />
                    </div>
                    <div>
                        <CiSettings className='bg-[#5F35F5] text-white w-[46px] h-[46px] m-auto' />
                    </div>
                    <div className='pt-[187px]'>
                        <LiaFolderOpen className=' text-white w-[46px] h-[46px] m-auto ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sliderbar