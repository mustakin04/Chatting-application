import React, { useEffect, useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import fried1 from "../../assets/Ellipse 5.png";
import fried2 from "../../assets/Ellipse 6.png";
import fried3 from "../../assets/Ellipse 7.png";
import fried4 from "../../assets/Ellipse 8.png";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";
const MyGroup = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.userInfo.information);
  const [groupData,setGroupData]=useState([])

  useEffect(()=>{
    const starCountRef = ref(db, 'grouplist/');
    onValue(starCountRef, (snapshot) => {
      let arry=[]
      snapshot.forEach((item)=>{
        if(data.uid==item.val().adminid){
         arry.push(item.val())
        }
        setGroupData(arry)
      })
    });
  },[])
  console.log(groupData,"24")
  return (
    <div>
      <div>
        {/* My Groups */}
        <div className="px-[20px] ">
          <div className="flex justify-between mb-[17px] ">
            <p className="font-poppins font-semibold text-[20px]">My Groups </p>
            <PiDotsThreeVerticalBold />
          </div>
          {
            groupData.map((item,index)=>(
              <div key={index} className="border-b-[2px] pb-[13px] mt-[12px]">
            <div className="flex  items-center">
              <img src={fried2} alt="" />
              <div className="flex gap-[92px] ml-[11px]">
                <div>
                  <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                    {item.groupName}
                  </p>
                  <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                   {item.groupTagline}
                  </h4>
                </div>
                <p className="font-poppins font-medium text-[10px] ">
                  Today, 8:56pm
                </p>
              </div>
            </div>
          </div>
            ))

          }
          
          
        </div>
      </div>
    </div>
  );
};

export default MyGroup;
