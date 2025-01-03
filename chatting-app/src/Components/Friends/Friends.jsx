import React, { useEffect, useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import fried1 from "../../assets/Ellipse 5.png";
import fried2 from "../../assets/Ellipse 6.png";
import fried3 from "../../assets/Ellipse 7.png";
import fried4 from "../../assets/Ellipse 8.png";
import { getDatabase, ref, onValue } from "firebase/database";

const Friends = () => {
  const db = getDatabase();
  const [friend,setFriend]=useState([])
  useEffect(()=>{

    const starCountRef = ref(db, "friend/" );
    onValue(starCountRef, (snapshot) => {
      let arry=[]
        snapshot.forEach((item)=>{
          arry.push(item.val())
        })
      setFriend(arry)
    });
  },[])
  console.log(friend,"aee")
  return (
    <div>
      <div className="w-[344px] ">
        <div className="px-[20px] mt-[40px] border mb-[40px]">
          <div className="flex justify-between mb-[17px] ">
            <p className="font-poppins font-semibold text-[20px]">Friend </p>
            <PiDotsThreeVerticalBold />
          </div>
          {
            friend.map((item,index)=>(
            <div key={index} className="border-b-[2px] pb-[13px] mt-[12px]">
                <div className="flex  items-center">
                  <img src={fried1} alt="" />
                  <div className="flex gap-[92px] ml-[11px]">
                    <div>
                      <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                        {
                            item.sendername
                        }
                      </p>
                      <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                        Dinner?
                      </h4>
                    </div>
                    <p className="font-poppins font-medium text-[10px] ">
                      Today, 8:56pm
                    </p>
                  </div>
                </div>
              </div>))
          }
          
        </div>
        {/* My Groups */}
        <div className="px-[20px] ">
          <div className="flex justify-between mb-[17px] ">
            <p className="font-poppins font-semibold text-[20px]">My Groups </p>
            <PiDotsThreeVerticalBold />
          </div>
          <div className="border-b-[2px] pb-[13px] mt-[12px]">
            <div className="flex  items-center">
              <img src={fried1} alt="" />
              <div className="flex gap-[92px] ml-[11px]">
                <div>
                  <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                    Raghav
                  </p>
                  <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                    Dinner?
                  </h4>
                </div>
                <p className="font-poppins font-medium text-[10px] ">
                  Today, 8:56pm
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-[2px] pb-[13px] mt-[12px]">
            <div className="flex  items-center">
              <img src={fried2} alt="" />
              <div className="flex gap-[92px] ml-[11px]">
                <div>
                  <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                    Raghav
                  </p>
                  <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                    Dinner?
                  </h4>
                </div>
                <p className="font-poppins font-medium text-[10px] ">
                  Today, 8:56pm
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-[2px] pb-[13px] mt-[12px]">
            <div className="flex  items-center">
              <img src={fried3} alt="" />
              <div className="flex gap-[92px] ml-[11px]">
                <div>
                  <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                    Raghav
                  </p>
                  <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                    Dinner?
                  </h4>
                </div>
                <p className="font-poppins font-medium text-[10px] ">
                  Today, 8:56pm
                </p>
              </div>
            </div>
          </div>
          <div className=" pb-[13px] mt-[12px] mb-[30px]">
            <div className="flex  items-center">
              <img src={fried4} alt="" />
              <div className="flex gap-[92px] ml-[11px]">
                <div>
                  <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                    Raghav
                  </p>
                  <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                    Dinner?
                  </h4>
                </div>
                <p className="font-poppins font-medium text-[10px] ">
                  Today, 8:56pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
