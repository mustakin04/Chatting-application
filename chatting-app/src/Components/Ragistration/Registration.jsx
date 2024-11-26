import React, { useState } from 'react'
import registration from "../../../src/assets/registration.png"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



const Registration = () => {
    const [email, setEmail] = useState("")
    const[text,setText]=useState("")
    const[password,setPassword]=useState("")

    const[showPassword,setShowPassword]=useState(false)


    const [errormail, setErrormail] = useState("")
    const[errortext,setEerrorText]=useState("")
    const[errorpassword,setErrorPassword]=useState("")

    const handleEmail = (e) => { 
        setEmail(e.target.value);
        setErrormail("")
    }
    const handleText=(e)=>{
        setText(e.target.value)
        setEerrorText("")
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        if(password>= "A" && password<= "Z" ){
            setErrorPassword("small latter")
        }
        setErrorPassword("")
    }
   
    const evenHandle=()=>{
        setErrorPassword("Password must be between 8 characters and at least one uppercase letter[a-z],lowercase letter[a-z],digit[0-9],special character[!@#$%^&*(),.?\":{}|<>] ")

    }
   
    const handleSubmit = () => {
        if (!email) {
            setErrormail("Enter a mail here")
        } else
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setErrormail("Not Mail")
            }
        if (!text){
            setEerrorText("Entre a name")
        }
        if(!password){
            setErrorPassword("Enter a pasword")
        }
        
    }
    return (
        <div className='flex'>
            <div className='w-1/2 ml-[190px] mt-[60px]'>
                <h1 className='font-nunito font-bold text-[34px] text-[#11175D]'>Get started with easily register</h1>
                <h2 className='font-nunito font-normal text-[20px] text-[#bfbfbf] mt-[13px] mb-[40px]'>Free register and you can enjoy it</h2>
                <div className='relative '>
                    <input
                       value={email}
                        onChange={handleEmail}
                        type="email"
                        placeholder='Enter email'
                        className='border-[2px] border-[#bfbfbf] w-[368px] py-[26px] pl-[52px] rounded-[8px]' />
                    <div className='pl-[18px] pr-[12px] bg-white absolute top-[-9px] left-[46px]'>
                        <p className='font-nunito font-semibold text-[13px] text-[#11175D] traking-[2px] '>Email Address</p>
                    </div>
                </div>
                <p className='bg-pink-400 w-[368px] mt-[5px] rounded-[2px]'>{errormail}</p>
                <div className='relative mt-[35px]'>
                    <input
                        onChange={handleText}
                        value={text}
                        type="text"
                        placeholder='Enter Name'
                        className='border-[2px] border-[#bfbfbf] w-[368px] py-[26px] pl-[52px] rounded-[8px]' />
                    <div className='pl-[18px] pr-[12px] bg-white absolute top-[-9px] left-[46px] '>
                        <p className='font-nunito font-semibold text-[13px] text-[#11175D]  '>Full name</p>
                    </div>
                </div>
                <p className='bg-pink-400 w-[368px] mt-[5px] rounded-[2px]'>{errortext}</p>
                <div className='relative mt-[35px] w-[368px]'>
                   {
                    showPassword ? (<FaEye  onClick={()=>setShowPassword(!showPassword)} className='absolute top-[40%] right-[20px] text-xl' />)
                    : (<FaEyeSlash onClick={()=>setShowPassword(!showPassword)} className='absolute top-[40%] right-[20px] text-xl'/>
                    )
                   }

                    <input
                        onClick={evenHandle}
                        onChange={handlePassword}
                        type={`${showPassword ? "text":"password"}`}
                        placeholder='Enter Password'
                        className='border-[2px] border-[#bfbfbf] w-[368px] py-[26px] pl-[52px] rounded-[8px]' />
                    <div className='pl-[18px] pr-[12px] bg-white absolute top-[-9px] left-[46px]'>
                        <p className='font-nunito font-semibold text-[13px] text-[#11175D] '>Password</p>
                    </div>
                </div>
                <p className='bg-pink-400 w-[368px] mt-[5px] rounded-[2px]'>{errorpassword}</p>
                <div className='mt-[61px]'>
                    <a
                        onClick={handleSubmit}
                        className='font-nunito font-semibold text-[20px] text-[#ffffff] 
               bg-[#5F35F5] py-[20px] pl-[158px] pr-[132px] rounded-[86px]' href="#"> Sign up</a>
                </div>
                <p className='font-sans font-mixed text-[13px] mt-[35px] w-[368px] text-center '>Already  have an account ? <span className='text-[#EA6C00]'>Sign In</span></p>
            </div >
            <div className='w-1/2'>
                <img className='w-full h-screen object-center' src={registration} alt="" />
            </div>
        </div>
    )
}

export default Registration