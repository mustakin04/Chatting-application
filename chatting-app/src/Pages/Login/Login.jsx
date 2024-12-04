import React, { useState } from 'react'
import login from "../../../src/assets/login.png"
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
     const [mail,setMail]=useState("")
     const [pass,setPass]=useState("")
     
     const [errmail,setErrMail]=useState("")
     const[errpassword,setErrPassword]=useState("")

     const[seePassword,setSeePassword]=useState(false)

    const handleMail=(e)=>{
        setMail(e.target.value)
        setMail("")
    }
    const handlePass=(e)=>{
        setPass(e.target.value)
        setMail("")
    }
    const handleLogin=()=>{
        if(!mail){
           setErrMail("Enter a Mail")  
        }else{
            setErrMail("")
        }
        if(!pass){
            setErrPassword("Enter Password")
        }
    }
    return (
        <div className='flex'>
            <div className='w-1/2  ml-[147px] mt-[200px]'>
                <h1 className='font-sans font-bold text-[34px] text-[#03014C]'>Login to your account!</h1>
                <div className='flex w-[220px] h-[62px] border-[2px] border-[#cbcada] py-[22px] pl-[29px] my-[31px] '>
                    <div className='w-[19px] h-[19px]  gap-[2px] '>
                        <FcGoogle />
                    </div>
                    <p className='font-sans font-semibold text-[13px] text-[#03014C]'>Login with Google</p>
                </div>
                <div className='border-b-[2px] w-[372px]'>
                    <p className='font-sans font-normal text-[13px] text-[#ababc4]'>Email Addres</p>
                    <input type={mail}
                        onChange={handleMail}
                        placeholder='Enter mail'
                        className='border-none focus:outline-none placeholder-black' />
                </div>
                <p>{errmail}</p>
                <div className='relative border-b-[2px] w-[372px] mt-[56px]'>
                    <p className='font-sans font-normal text-[13px] text-[#ababc4]'>Password</p>
                    {
                        seePassword ?(<FaEye onClick={()=>setSeePassword(!seePassword)} className='absolute top-[10px] right-[10px] text-xl'/>):(
                            <FaEyeSlash onClick={()=>setSeePassword(!seePassword)} className='absolute top-[10px] right-[10px] text-xl' />
                        )
                    }
                    
                    <input type={seePassword? "text":"password"}
                        onChange={handlePass}
                        placeholder='Enter your password'
                        className='border-none focus:outline-none placeholder-black' />
                </div>
                <p>{errpassword}</p>
                
                <div className='w-[424px] h-[90px] mt-[56px] bg-[#5F34F5]'>
                    <button 
                    onClick={handleLogin}
                    className='font-sans font-semibold text-[20px] text-white py-[19px] px-[113px]' href="">Login to Continue</button>
                </div>
                <div className='mt-[45px]'>
                    <p className='font-sans font-mixed text-[13px]'>Don’t have an account ? 
                        <span className='font-sans font-mixed text-[13px] text-[#EA6C00]'>Sign up</span></p>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='w-full h-screen object-center' src={login} alt="" />
            </div>
        </div>
    )
}

export default Login