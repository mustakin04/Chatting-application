import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import fried1 from "../../assets/Ellipse 5.png";
import UnBlock from "../UnBlock/UnBlock";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useSelector } from "react-redux";
const FriendBlock = () => {
  const db = getDatabase();
  const [block, setBlock] = useState([]);
  
  const data = useSelector((state) => state.userInfo.information);

  useEffect(() => {
    const blockRef = ref(db, "block/");
    onValue(blockRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        if(data.uid==item.val().blockbyid){
        arry.push({...item.val(),userid:item.key});}
      });
      setBlock(arry);
    });
  }, []);
  // console.log(block, "21");
  const handleUnBlock =(item)=>{
      remove(ref(db,"block/"+item.userid))
  }

  return (
    <div>
      {/* blocked users */}
      <div className="px-[20px] py-[13px] shadow-demo border mt-[20px]  bg-white">
        <div className="flex justify-between mb-[17px]">
          <p className="font-poppins font-semibold text-[20px]">
            Friend Blocklist
          </p>
          <BsThreeDotsVertical />
        </div>
        {block.map((item, index) => (
          <div key={index} className="border-b-[2px] pb-[13px] ">
            <div className="flex justify-between items-center mr-[20px]">
              <div className="flex gap-4 items-center">
                <img src={fried1} alt="" />
                <div>
                  <p 
                  className="font-poppins font-semibold text-[18px] text-[#000000]">
                    {item.block}
                  </p>
                  <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                    Dinner?
                  </h4>
                </div>
              </div>
              <div onClick={()=>handleUnBlock(item)}>
                <UnBlock ></UnBlock>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendBlock;
