import React from "react";
import chatpic from "../../assets/Ellipse 7.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";
import message_img from "../../assets/registration.png";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";


const ChatBox = () => {
    const activeData=useSelector((state)=>state.activeChat.value)
   console.log(activeData)
  return (
    <div className="border p-[18px]">
      <div className="flex justify-between items-center border-b-2 border-[#000000] border-opacity-15 pb-[25px]">
        <div className="flex gap-[33px]">
          <img src={chatpic} alt="" />
          <div>
            <h2 className="font-poppins font-semibold text-[24px] text-[#000000]">
              {activeData.name}
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
      <div className="snap-y h-[600px] overflow-y-auto overflow-x-hidden ">
       <div className="px-[20px]">
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
          <h5
            className="font-poppins font-medium text-[#000000] 
          text-opacity-25 text-[12px] mt-[10px]"
          >
            Today,2:15pm
          </h5>
        </div>
        {/* sender part */}
        <div className="flex justify-end">
          <div className="relative max-w-[350px] mt-[20px] text-end">
            <p
              className="font-poppins font-medium text-[18px] text-[#000000] 
          inline-block py-[10px] px-[8px] rounded-sm bg-[#5F35F5] "
            >
              Hey There!
            </p>
            <div className="absolute top-[26px] right-[-11px] z-[999]">
              <PiTriangleFill className=" text-[#5F35f5] text-2xl" />
            </div>
            <h5
              className="font-poppins font-medium text-[#000000] 
          text-opacity-25 text-[12px] mt-[10px]"
            >
              Today,2:15pm
            </h5>
          </div>
        </div>
        {/* reciver images */}
        <div className="mb-[20px]">
          <img
            src={message_img}
            alt=""
            className="w-[250px] h-[300px] object-cover rounded-lg"
          />
        </div>
        {/* reciver images */}
        <div className="flex justify-end items-center mb-[30px] ">
          <div className="w-[260px] h-[310px] p-2 bg-[#5F35f5]">
            <img
              src={message_img}
              alt=""
              className="w-[250px] h-[300px] object-cover rounded-lg "
            />
          </div>
        </div>
       </div>
      </div>
      {/* input flied */}
      <div className=" flex  items-center border-t-2">
        <input type="text" 
        className="bg-[#F1F1F1] w-[557px] py-[12px] mt-[20px] font-poppins 
        font-normal text-[15px] px-[13px]"/>
        <div className=" flex items-center text-center w-[45px] h-[48px] bg-[#5F35f5] ml-[20px]
        mt-[20px] rounded-sm">
        <IoIosSend  className="text-3xl text-white pl-[10px] "/>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
