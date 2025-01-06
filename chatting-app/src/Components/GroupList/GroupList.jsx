import React from 'react'
import { CiSearch } from "react-icons/ci";
import group1 from "../../assets/Ellipse 2.png";
import Buttons from "../Buttons/Buttons";
import group2 from "../../assets/Ellipse 3.png";
import group4 from "../../assets/Ellipse 4.png";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import FriendList from '../FriendList/FriendList';
const GroupList = () => {
  return (
    <div>
        <div className='w-[427px] ml-[43px]'>
        <div className="flex items-center gap-[36px] pl-[23px] border-[2px]  rounded-[20px] py-[18px]">
          <CiSearch />
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none w-full"
          />
          <div className="">
            <PiDotsThreeVerticalBold className="right-0" />
          </div>
        </div>
        {/* Group list */}
        <div className="px-[20px] py-[13px]  border rounded bg-white">
          <div className="flex justify-between mb-[17px]">
            <p className="font-poppins font-semibold text-[20px]">
              Groups List
            </p>
            <PiDotsThreeVerticalBold />
          </div>
          <div className="border-b-[2px] pb-[13px]">
            <div className="flex justify-between items-center">
              <img src={group1} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Friends Reunion
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  Hi Guys, Wassup!
                </h4>
              </div>
              <Buttons></Buttons>
            </div>
          </div>
          <div className="border-b-[2px] py-[13px]">
            <div className="flex justify-between items-center">
              <img src={group2} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Friends Reunion
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  Hi Guys, Wassup!
                </h4>
              </div>
              <Buttons></Buttons>
            </div>
          </div>
          <div className=" py-[13px]">
            <div className="flex justify-between items-center">
              <img src={group4} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Crazy Cousins
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  What plans today?
                </h4>
              </div>
              <Buttons></Buttons>
            </div>
          </div>
        </div>
        </div>
        {/* Friend Request list */}
        <FriendList></FriendList>
    </div>
  )
}

export default GroupList