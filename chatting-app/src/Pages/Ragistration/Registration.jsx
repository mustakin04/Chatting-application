import React, { useState } from 'react'
import registration from "../../../src/assets/resource-tti-15.jpeg"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification ,updateProfile} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BallTriangle } from 'react-loader-spinner'
import { getDatabase, ref, set } from "firebase/database";


const Registration = () => {
    const db = getDatabase();
    const navigate = useNavigate("");
    const auth = getAuth();
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [password, setPassword] = useState("")
    const [succes, setSucces] = useState("")
    const[loading,setLoading]=useState(false)

    const [showPassword, setShowPassword] = useState(false)

    const [errormail, setErrormail] = useState("")
    const [errortext, setEerrorText] = useState("")
    const [errorpassword, setErrorPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrormail("")
    }
    const handleText = (e) => {
        setText(e.target.value)
        setEerrorText("")
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setErrorPassword("")
    }

    const evenHandle = () => {
        setErrorPassword("Password must be between 8 characters and at least one uppercase letter[a-z],lowercase letter[a-z],digit[0-9],special character[!@#$%^&*(),.?\":{}|<>] ")

    }

    const handleSubmit = () => {
        let isValid = true; // Track validity of all inputs

        // Email validation
        if (!email) {
            setErrormail("Enter a mail here");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrormail("Invalid email format.");
            isValid = false;
        } else {
            setErrormail(""); // Clear error if email is valid
        }

        // Text validation
        if (!text) {
            setEerrorText("Enter a name");
            isValid = false;
        } else {
            setEerrorText(""); // Clear error if text is valid
        }

        // Password validation
        if (!password) {
            setErrorPassword("Please enter your password.");
            isValid = false;
        } else if (!/(?=.*?[A-Z])/.test(password)) {
            setErrorPassword("Password must include at least one uppercase letter.");
            isValid = false;
        } else if (!/(?=.*?[a-z])/.test(password)) {
            setErrorPassword("Password must include at least one lowercase letter.");
            isValid = false;
        } else if (!/(?=.*?[0-9])/.test(password)) {
            setErrorPassword("Password must include at least one digit.");
            isValid = false;
        } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setErrorPassword("Password must include at least one special character.");
            isValid = false;
        } else if (password.length < 8) {
            setErrorPassword("Password must be at least 8 characters long.");
            isValid = false;
        } else {
            setErrorPassword(""); // Clear error if password is valid
        }

        // If all validations pass, show success alert
        if (isValid) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((user)=>{
                    updateProfile(auth.currentUser, {
                        displayName: text,
                         photoURL: "https://example.com/jane-q-user/profile.jpg"
                      })
                      .then(() => {
                        console.log(user,"fdg")
                        sendEmailVerification(auth.currentUser)
                        setLoading(true)
                        toast("Registation Succesfully Done")
                        setEmail("")
                        setPassword("")
                        setText("")
                        setTimeout(() => {
                            navigate("/Login")
                        }, 3000);
                        // ...
                    }).then(()=>{
                        set(ref(db, 'users/'+user.user.uid ), {
                            username: user.user.displayName,
                            email: user.user.email,
                            
                          });
                        
                        
                    })
                })
                
                .catch((error) => {
                    const errorCode = error.code;
                    setErrormail("auth/email-already-in-use")
                    // ..
                });
        }
    };

    return (
        <div className='flex'>
            <div className='w-[45%] ml-[190px] mt-[60px]'>
                <h1 className='font-nunito font-bold text-[34px] text-[#de968d]'>Get started with easily register</h1>
                <h2 className='font-nunito font-normal text-[20px] text-[#bfbfbf] mt-[13px] mb-[5px]'>Free register and you can enjoy it</h2>
                {succes && <p className='bg-green-400 font-nunito font-bold text-[24px] text-white w-[368px]
                 py-[10px] mb-[30px] rounded-[5px]'>{succes}</p>}
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
                <ToastContainer />
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
                        showPassword ? (<FaEye onClick={() => setShowPassword(!showPassword)} className='absolute top-[40%] right-[20px] text-xl' />)
                            : (<FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='absolute top-[40%] right-[20px] text-xl' />
                            )
                    }

                    <input
                        onClick={evenHandle}
                        onChange={handlePassword}
                        type={`${showPassword ? "text" : "password"}`}
                        placeholder='Enter Password'
                        className='border-[2px] border-[#bfbfbf] w-[368px] py-[26px] pl-[52px] rounded-[8px]' />
                    <div className='pl-[18px] pr-[12px] bg-white absolute top-[-9px] left-[46px]'>
                        <p className='font-nunito font-semibold text-[13px] text-[#11175D] '>Password</p>
                    </div>
                </div>
                <p className='bg-pink-400 w-[368px] mt-[5px] rounded-[2px]'>{errorpassword}</p>
                 {
                    loading?(<BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />):("")
                 }
                <div className='mt-[61px]'>
                    <a
                        onClick={handleSubmit}
                        className='font-nunito font-semibold text-[20px] text-[#ffffff] 
               bg-[#de968d] py-[20px] pl-[158px] pr-[132px] rounded-[86px]' href="#"> Sign up</a>
                </div>
                <p className='font-sans font-mixed text-[13px] mt-[35px] w-[368px] text-center '>
                    Already  have an account ? <span className='text-[#EA6C00]'>
                       <Link to="/login"> Sign In</Link></span></p>
            </div >
            <div className='w-[55%]'>
                <img className='w-full h-screen object-center' src={registration} alt="" />
            </div>
        </div>
    )
}

export default Registration