import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


const ForgetPassword = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("")
  const [errorMail, seterrorMail] = useState("")
  const navigate= useNavigate("")

  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = () => {
    let isValid = true; // Use 'let' so the value can be updated.

    if (!email) {
      seterrorMail("Enter a Mail");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      seterrorMail("Invalid email format.");
      isValid = false;
    } else {
      seterrorMail(""); // Clear error if email is valid
    }

    if (isValid) {
      // Proceed with form submission logic here
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          // ..
  
          toast("Chack Your inbox Mail")
          setEmail("")
        })
        .catch((error) => {
          const errorCode = error.code;
         if(errorCode=="auth/invalid-email"){
          toast("auth/invalid-email")
         }
          // ..
        });

    }


  }
  return (
    <div className='flex items-center bg-blue-500 w-full h-screen'>
      <div className='bg-white  w-[500px] m-auto '>

        <ToastContainer />
        <div className='m-8'>
          <p className='text-center font-sans font-bold text-[25px] mb-[18px]'>Forgot Password</p>
          <h6 className='font-sans font-normal text-[13px] text-[#ababc4]'>Email Addres</h6>
          <div className='border-b-[2px] b'>
            <input type="text"
              onChange={handleChange}
              placeholder='Enter your valid mail'
              className=' py-[8px] border-none focus:outline-none  ' />
          </div>
          <p className='bg-pink-400 w-[368px] mt-[5px] rounded-[2px]'>{errorMail}</p>
          <div className='mt-[13px]'>
            <button
              onClick={handleSubmit}
              className='bg-orange-400 py-[7px] px-[15px] rounded-sm'>Reset</button>
            <button className='ml-[20px] bg-lime-500 py-[7px] px-[15px] rounded-sm'>
              <Link to='/login'>Back to Login</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword