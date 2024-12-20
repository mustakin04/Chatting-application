import React, { useState } from 'react'
import image1 from "../../../src/assets/Ellipse 1.png"
import { IoHomeOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LiaFolderOpen } from "react-icons/lia";
import { IoCloudUploadOutline } from "react-icons/io5";



const Sliderbar = () => {
    const [show, setShow] = useState(false)
    const evenHandle = () => {
        setShow(true)
    }
    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result );
        };
        reader.readAsDataURL(files[0]);
      };
    return (
        <div className='relative'>
            <div>
                <div className='flex '>
                    <div className='w-[186px] h-[954px] bg-[#5F35F5] pt-[12px]'>
                        <div className='group relative w-[100px] h-[100px] rounded-full m-auto'>
                            <img src={image1} alt="" />
                            <div
                                className='hover:bg-black w-[100px] group-hover:opacity-50 h-[100px] absolute top-0 left-0 
                        rounded-full opacity-0 flex justify-center items-center '>
                                <IoCloudUploadOutline
                                    onClick={evenHandle}
                                    className='text-3xl text-white' />
                            </div>
                        </div>
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
            {
                show && (<div className='absolute bg-blue-400 w-[880px] h-screen  top-0 left-0 z-[9999] '>
                    <div className='bg-white  w-[500px] m-auto '>

                        {/* <ToastContainer /> */}
                        <div className='m-8'>
                            <p className='text-center font-sans font-bold text-[25px] mb-[18px]'>Image Upload</p>
            
                            <div className='border-b-[2px] b'>
                                <input type="file"
                                   onChange={onChange}
                                    //   onChange={handleChange}
                                    placeholder='Enter your valid mail'
                                    className=' py-[8px] border-none focus:outline-none  ' />
                            </div>
                            <p className='bg-pink-400 w-[368px] mt-[5px] rounded-[2px]'></p>
                            <div className='mt-[13px]'>
                                <button
                                    //   onClick={handleSubmit}
                                    className='bg-orange-400 py-[7px] px-[15px] rounded-sm'>Upload</button>
                                <button className='ml-[20px] bg-lime-500 py-[7px] px-[15px] rounded-sm'>Back to Home
                                    {/* <Link to='/login'>Back to Login</Link></button> */}</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Sliderbar