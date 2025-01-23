import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import group1 from "../../assets/Ellipse 2.png";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { getDatabase, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
const Groups = () => {
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
            
          </div>
          <div className="border-b-[2px] pb-[13px]">
            <div className="flex  items-center">
              <img src={group1} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Friends Reunion
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  Hi Guys, Wassup!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Groups;
