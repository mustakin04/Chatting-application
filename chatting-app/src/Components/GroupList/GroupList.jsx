import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import group1 from "../../assets/Ellipse 2.png";
import Buttons from "../Buttons/Buttons";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { getDatabase, push, ref, set } from "firebase/database";
import FriendList from "../FriendList/FriendList";
import { useSelector } from "react-redux";
const GroupList = () => {
  const db = getDatabase();
  const [show, setShow] = useState(false);
  const [groupName,setGroupName]=useState("")
  const [groupTagline,setGroupTagline]=useState("")

  const data = useSelector((state) => state.userInfo.information);


  const handleGroup = () => {
    setShow(!show);
  };
  const handleSubmit=()=>{
    set(push(ref(db, 'grouplist/')), {
        groupName:groupName,
        groupTagline:groupTagline,
        adminName:data.displayName,
        adminid:data.uid
    });
    setGroupName(" ")
    setGroupTagline(" ")
  }
   
   
  
  return (
    <div>
      <div className="w-[427px] ml-[43px]">
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
            <div>
              <button
                onClick={handleGroup}
                className="bg-red-500 py-3 px-[10px] rounded-sm font-poppins
                   font-semibold text-white"
              >
                Create Group
              </button>
            </div>
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
        </div>
      </div>
      {show && (
        <div
          className="bg-yellow-300 w-[500px] pb-[50px] absolute top-[100px] left-[790px] 
        rounded-md shadow z-99999 "
        >
          <div className="px-[20px]">
            <h1 className="text-center text-[20px] text-white font-poppins font-bold mt-[24px]">
              Group Create
            </h1>
            <input
              placeholder="Group Tagline"
              value={groupName}
              onChange={(e)=>setGroupName(e.target.value)}
              type="text"
              className="w-full py-3 px-[5px] mt-[24px] placeholder:text-black"
            />
            <input
              value={groupTagline}
              onChange={(e)=>setGroupTagline(e.target.value)}
              type="text"
              placeholder="Group Name"
              className="w-full py-3 px-[5px]  mt-[24px]"
            />
            <button 
             onClick={handleSubmit}
             className="w-full bg-rose-400 font-poppins font-semibold
             text-white text-[17px] mt-[24px] py-3">Submit</button>
              <button
              onClick={handleGroup}
              className="w-full bg-rose-400 font-poppins font-semibold
             text-white text-[17px] mt-[24px] py-3 text-center">Go Back</button>
          </div>
        </div>
      )}
      {/* Friend Request list */}
      <FriendList></FriendList>
    </div>
  );
};

export default GroupList;
