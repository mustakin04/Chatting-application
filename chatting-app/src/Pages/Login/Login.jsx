import React, { useState } from 'react'
import login from "../../../src/assets/4673526.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userInformation } from '../../Slice/Slice';


const Login = () => {
    const auth = getAuth();
    const navigate=useNavigate("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [errmail, setErrMail] = useState("")
    const [errpassword, setErrPassword] = useState("")

    const [seePassword, setSeePassword] = useState(false)
    const disPatch=useDispatch()
    // const useSlect=useSelector()


    const handleMail = (e) => {
        setEmail(e.target.value)

    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const handleLogin = () => {
        let isvalid = true;
        if (!email) {
            setErrMail("Enter a Mail")
            isvalid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrMail("Invalid Mail")
            isvalid = false;
        }
        else {
            setErrMail("")

        }
        if (!pass) {
            setErrPassword("Enter Password")
            isvalid = false;
        } else {
            setErrPassword("")

        }
        if (isvalid) {
            signInWithEmailAndPassword(auth, email, pass)
                .then((data) => {
                    disPatch(userInformation(data.user))
                    localStorage.setItem("userInformation" ,JSON.stringify(data.user))
                    setEmail("")
                    setPass("")
                    toast("Registation Succesfully Done")
                    setTimeout(() => {
                        navigate("/home")
                      }, 2000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if(errorCode=="auth/invalid-credential"){
                        toast("auth/invalid-credential")
                    }
                });

            
        }
    }
    return (
        <>
        <div className='flex'>
            <div className='w-[45%]  ml-[147px] mt-[200px]'>
                <h1 className='font-sans font-bold text-[34px] text-green-400'>Login to your account!</h1>
                <div className='flex w-[220px] h-[62px] border-[2px] border-[#cbcada] py-[22px] pl-[29px] my-[31px] '>
                    <div className='w-[19px] h-[19px]  gap-[2px] '>
                        <FcGoogle />
                    </div>
                    <p className='font-sans font-semibold text-[13px] text-[#03014C]'>Login with Google</p>
                </div>
                <ToastContainer />
                <div className='border-b-[2px] w-[372px]'>
                    <p className='font-sans font-normal text-[13px] text-[#ababc4]'>Email Addres</p>
                    <input type={email}
                        onChange={handleMail}
                        placeholder='Enter mail'
                        className='border-none focus:outline-none placeholder-black' />
                </div>
                 
                <p className='bg-red-500 font-sans font-normal text-[15px] w-[220px] rounded-[10px] '>{errmail}</p>
                <div className='relative border-b-[2px] w-[372px] mt-[56px]'>
                    <p className='font-sans font-normal text-[13px] text-[#ababc4]'>Password</p>
                    {
                        seePassword ? (<FaEye onClick={() => setSeePassword(!seePassword)} className='absolute top-[10px] right-[10px] text-xl' />) : (
                            <FaEyeSlash onClick={() => setSeePassword(!seePassword)} className='absolute top-[10px] right-[10px] text-xl' />
                        )
                    }

                    <input type={seePassword ? "text" : "password"}
                        onChange={handlePass}
                        placeholder='Enter your password'
                        className='border-none focus:outline-none placeholder-black' />
                </div>
                <p className='bg-red-500 font-sans font-normal text-[15px] w-[220px] rounded-[10px] '>{errpassword}</p>

                <div className='w-[424px] h-[90px] mt-[56px] bg-green-400 rounded-lg'>
                    <button
                        onClick={handleLogin}
                        className='font-sans font-semibold text-[20px] text-white py-[19px] px-[113px]' href="">Login to Continue</button>
                </div>
                <div className='w-[424px]  mt-[16px] bg-green-300 rounded-lg text-white'>
                    <p className='text-center py-[12px]'>
                       <Link to="/forgetpassword"> Forget Password</Link></p>
                </div>
                <div className='mt-[45px]'>
                    <p className='font-sans font-mixed text-[13px]'>Don’t have an account ?
                        <span className='font-sans font-mixed text-[13px] text-[#EA6C00]'>
                           <Link to="/registration"> Sign up</Link></span></p>
                </div>
            </div>
            <div className='w-[55%]'>
                <img className='w-full h-screen object-center' src={login} alt="" />
            </div>
        </div>
        </>
    )
}

export default Login