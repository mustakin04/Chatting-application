import React, { useState } from "react";
import Sliderbar from "../../Components/Sliderbar/Sliderbar";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import mustakin from "../../assets/mustakin.jpeg";
import { FaUserEdit } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { GiRoundShield } from "react-icons/gi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getAuth, updateProfile } from "firebase/auth";

const Settings = () => {
  const [show, setShow] = useState(false);
  const auth = getAuth();
  const handleEdit = () => {
    setShow(!show);
  };
  return (
    <div className="flex">
      <Sliderbar state="setting"></Sliderbar>
      <div className="mt-[20px] ml-[50px]">
        <div className="relative ">
          <div className="absolute top-[10px] left-[10px]">
            <FaSearch className="text-3xl " />
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" w-[1300px] py-[14px] border shadow-lg bg-white rounded-[20px] px-[60px]"
          ></input>
          <div className="absolute right-[10px] top-[10px]">
            <BsThreeDotsVertical className="text-3xl" />
          </div>
        </div>
        <div className="flex mt-[30px] gap-[20px]">
          {/* Profile Name */}
          <div className="w-1/2 h-screen p-[26px] border rounded-lg">
            <h1 className="font-poppins font-semibold text-[20px] text-[#000000]">
              Profile Settings
            </h1>
            <div className="flex items-center gap-[20px] mt-[30px] border-b-[2px] border-cyan-200 pb-[30px]">
              <div className="w-[100px] h-[100px] rounded-[100%] bg-black overflow-hidden">
                <img src={mustakin} alt="" />
              </div>
              <div className="">
                <p className="font-poppins font-semibold text-[25px] text-[#000000]">
                  Mustakin Hasan
                </p>
                <p className="font-poppins font-normal text-[20px] text-[#000000]">
                  Stay home stay safe
                </p>
              </div>
            </div>
            {/* Edit part */}
            <div className=" mt-[20px] p-[30px]">
              <div
                onClick={handleEdit}
                className="flex items-center gap-[18px] mb-[20px]"
              >
                <FaUserEdit className="text-3xl" />
                <p className="font-poppins font-normal text-[20px] text-[#000000]">
                  Edit Profile Name
                </p>
              </div>
              <div className="flex items-center  gap-[30px] mb-[20px]">
                <IoChatbubbleEllipses className="text-3xl" />
                <p className="font-poppins font-normal text-[20px] text-[#000000]">
                  Edit Profile Status Info
                </p>
              </div>
              <div className="flex items-center  gap-[30px] mb-[20px]">
                <GrGallery className="text-3xl" />
                <p className="font-poppins font-normal text-[20px] text-[#000000]">
                  Edit Profile Photo
                </p>
              </div>
              <div className="flex items-center  gap-[30px]">
                <IoHelpCircleOutline className="text-3xl" />
                <p className="font-poppins font-normal text-[20px] text-[#000000]">
                  Help
                </p>
              </div>
            </div>
          </div>
          {/* Account Settings */}
          <div className=" relative w-1/2 h-screen p-[26px] border rounded-lg">
            <h2 className="font-poppins font-semibold text-[20px] text-[#000000]">
              Acount Settings
            </h2>
            <div className="p-[30px]">
              <div className="flex items-center gap-[18px] mb-[20px]">
                <FaKey className="text-3xl" />
                <p className="font-poppins font-normal text-[20px] text-[#000000]">
                  Change Password
                </p>
              </div>
              <div className="flex items-center gap-[18px] mb-[20px]">
                <GiRoundShield className="text-3xl" />
                <p className="font-poppins font-normal text-[20px] text-[#000000]">
                  Theme
                </p>
              </div>
              <div className="flex items-center gap-[18px] mb-[20px]">
                <RiDeleteBin6Fill className="text-3xl" />
                <p className="font-poppins font-normal text-[20px] text-[#000000]">
                  Delete Account
                </p>
              </div>
            </div>
            {show && (
              <div
                className="absolute top-[260px] left-[-200px] bg-homecolor w-[500px] h-[100px] rounded-lg shadow-red-500 opacity-60 
                p-[20px] flex items-center "
              >
                <div className="w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter profile Name"
                    className="py-[7px] w-full px-[5px] rounded"
                  />
                  <div className="flex gap-[20px] mt-[10px]">
                    <button className="bg-[]">Save</button>
                    <button>Back</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
