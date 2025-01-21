import React from "react";
import chatpic from "../../assets/Ellipse 7.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";

const ChatBox = () => {
  return (
    <div className="border p-[18px]">
      <div className="flex justify-between items-center border-b-2 border-[#000000] border-opacity-15 pb-[25px]">
        <div className="flex gap-[33px]">
          <img src={chatpic} alt="" />
          <div>
            <h2 className="font-poppins font-semibold text-[24px] text-[#000000]">
              Swathi
            </h2>
            <p className="font-poppins font-normal text-[14px] text-[#000000]">
              Online
            </p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
      {/* Chatting */}
      <div className="">
        {/* reciver part */}
        <div className="relative max-w-[350px] mt-[20px]">
          <p
            className="font-poppins font-medium text-[18px] text-[#000000] 
            bg-[#F1F1F1] inline-block py-[10px] px-[8px] rounded-sm "
          >
            Hey There!
          </p>
          <div className="absolute top-[26px] left-[-11px]  z-[999]">
            <PiTriangleFill className=" text-[#F1F1F1] text-2xl" />
          </div>
          <h5 className="font-poppins font-medium text-[#000000] 
          text-opacity-25 text-[12px] mt-[10px]">Today,2:15pm</h5>
        </div>
        {/* sender part */}
        <div className="text-right">
        <div className="relative max-w-[350px] mt-[20px] text-end">
          <p
            className="font-poppins font-medium text-[18px] text-[#000000] 
            bg-[#F1F1F1] inline-block py-[10px] px-[8px] rounded-sm"
          >
            Hey There!
          </p>
          <div className="absolute top-[26px] left-[-11px] z-[999]">
            <PiTriangleFill className=" text-[#F1F1F1] text-2xl" />
          </div>
          <h5 className="font-poppins font-medium text-[#000000] 
          text-opacity-25 text-[12px] mt-[10px]">Today,2:15pm</h5>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
