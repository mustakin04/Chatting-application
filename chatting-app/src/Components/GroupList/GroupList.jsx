import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import group1 from "../../assets/Ellipse 2.png"
import Buttons from '../Buttons/Buttons';
import group2 from "../../assets/Ellipse 3.png"
import group4 from "../../assets/Ellipse 4.png"
import Accept from '../Accept/Accept';
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';

const GroupList = () => {
    const [friendRequest, setFriendRequest] = useState([])
    const db = getDatabase();
    const data=useSelector((state)=>state.userInfo.information)
    useEffect(() => {
        const starCountRef = ref(db, 'friendsRequest/');
        onValue(starCountRef, (snapshot) => {
            let arry = []
            snapshot.forEach((item) => {
                 if(data.uid==item.val().reciverid){
                    arry.push(item.val())
                 }
               
            })
            setFriendRequest(arry)
        })
    }, [])
    console.log(friendRequest, "lo")
    return (
        <div>
            <div className='w-[427px] h-[954px] ml-[43px]'>
                <div className='flex items-center gap-[36px] pl-[23px] border-[2px]  rounded-[20px] py-[18px]'>
                    <CiSearch />
                    <input
                        type="text"
                        placeholder='Search'
                        className='focus:outline-none w-full' />
                    <div className=''>
                        <PiDotsThreeVerticalBold className='right-0' />
                    </div>
                </div>
                {/* Group list */}
                <div className='px-[20px] py-[13px]  border rounded bg-white'>
                    <div className='flex justify-between mb-[17px]'>
                        <p className='font-poppins font-semibold text-[20px]'>Groups List</p>
                        <PiDotsThreeVerticalBold />
                    </div>
                    <div className='border-b-[2px] pb-[13px]'>
                        <div className='flex justify-between items-center'>
                            <img src={group1} alt="" />
                            <div >
                                <p className='font-poppins font-semibold text-[18px] text-[#000000]'>Friends Reunion</p>
                                <h4 className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</h4>
                            </div>
                            <Buttons></Buttons>
                        </div>
                    </div>
                    <div className='border-b-[2px] py-[13px]'>
                        <div className='flex justify-between items-center'>
                            <img src={group2} alt="" />
                            <div >
                                <p className='font-poppins font-semibold text-[18px] text-[#000000]'>Friends Reunion</p>
                                <h4 className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</h4>
                            </div>
                            <Buttons></Buttons>
                        </div>
                    </div>
                    <div className=' py-[13px]'>
                        <div className='flex justify-between items-center'>
                            <img src={group4} alt="" />
                            <div >
                                <p className='font-poppins font-semibold text-[18px] text-[#000000]'>Crazy Cousins</p>
                                <h4 className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>What plans today?</h4>
                            </div>
                            <Buttons></Buttons>




                        </div>
                    </div>

                </div>
                {/* Friend Request */}
                <div className='px-[20px] py-[13px] shadow-demo bg-white'>
                    <div className='flex justify-between mb-[17px]'>
                        <p className='font-poppins font-semibold text-[20px]'>Friend  Request</p>
                        <PiDotsThreeVerticalBold />
                    </div>
                    {
                        friendRequest.map((item, index) => (
                            <div key={index} className='border-b-[2px] pb-[13px] '>
                                <div className='flex justify-between items-center mr-[20px]'>
                                    <div className='flex gap-4 items-center'>
                                        <img src={group1} alt="" />
                                        <div >
                                            <p className='font-poppins font-semibold text-[18px] 
                                            text-[#000000]'>{item.sendername}</p>
                                            <h4 className='font-poppins font-medium text-[14px] 
                                            text-[#4D4D4D]'>Dinner?</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <Accept></Accept>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GroupList