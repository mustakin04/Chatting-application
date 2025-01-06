import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import fried1 from "../../assets/Ellipse 5.png";
import fried2 from "../../assets/Ellipse 6.png";
import fried3 from "../../assets/Ellipse 7.png";
import fried4 from "../../assets/Ellipse 8.png";
import UnBlock from "../UnBlock/UnBlock";
const FriendBlock = () => {
  return (
    <div>
         {/* blocked users */}
      <div className="px-[20px] py-[13px] shadow-demo border mt-[20px]  bg-white">
        <div className="flex justify-between mb-[17px]">
          <p className="font-poppins font-semibold text-[20px]">
            Friend Request
          </p>
          <BsThreeDotsVertical />
        </div>
        <div className="border-b-[2px] pb-[13px] ">
          <div className="flex justify-between items-center mr-[20px]">
            <div className="flex gap-4 items-center">
              <img src={fried1} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Raghav
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  Dinner?
                </h4>
              </div>
            </div>
            <div>
              <UnBlock></UnBlock>
            </div>
          </div>
        </div>
        <div className="border-b-[2px] py-[13px]">
          <div className="flex justify-between items-center mr-[20px]">
            <div className="flex gap-4 items-center">
              <img src={fried2} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Swathi
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  Sure!
                </h4>
              </div>
            </div>
            <UnBlock></UnBlock>
          </div>
        </div>
        <div className="border-b-[2px] py-[13px]">
          <div className="flex justify-between items-center mr-[20px]">
            <div className="flex gap-4 items-center">
              <img src={fried3} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Kiran
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  hi
                </h4>
              </div>
            </div>
            <UnBlock></UnBlock>
          </div>
        </div>
        <div className=" py-[13px]">
          <div className="flex justify-between items-center mr-[20px]">
            <div className="flex gap-4 items-center">
              <img src={fried4} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Kiran
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  hi
                </h4>
              </div>
            </div>
            <UnBlock></UnBlock>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendBlock