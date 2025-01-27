import React, { useEffect, useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import fried1 from "../../assets/Ellipse 5.png";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import MyGroup from "../MyGroup/MyGroup";
import { useSelector } from "react-redux";

const Friends = () => {
  const db = getDatabase();
  const [friend, setFriend] = useState([]);
  const data = useSelector((state) => state.userInfo.information);

  useEffect(() => {
    const starCountRef = ref(db, "friend/");
    onValue(starCountRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        if (
          data.uid == item.val().reciverid ||
          data.uid == item.val().senderid
        ) {
          arry.push({ ...item.val(), keys: item.key });
        }
      });
      setFriend(arry);
    });
  }, []);
  // console.log(friend, "aee");
  const handleBlock = (item) => {
    if (data.uid == item.senderid) {
      set(push(ref(db, "block/")), {
        blockid: item.reciverid,
        block: item.recivername,
        blockbyid: item.senderid,
        blockby: item.sendername,
      }).then(()=>{
        remove(ref(db,"friend/"+item.keys))
      });
    }else if(data.uid==item.reciverid){
      set(push(ref(db, "block")), {
        blockid: item.senderid,
        block: item.sendername,
        blockbyid: item.reciverid,
        blockby: item.recivername,
      }).then(()=>{
        remove(ref(db,"friend/"+item.keys))
      });
    }
  };
  return (
    <div>
      <div className="w-[427px] ">
        <div className="px-[20px] mt-[40px] border mb-[40px] rounded-2xl">
          <div className="flex justify-between mb-[17px] pt-[20px] ">
            <p className="font-poppins font-semibold text-[20px]">Friend </p>
            <PiDotsThreeVerticalBold />
          </div>
          {friend.map((item, index) => (
            <div key={index} className="border-b-[2px] pb-[13px] mt-[12px] ">
              <div className="flex  items-center justify-between">
               
                <div className="flex  ">
                <img src={fried1} alt="" />
                  <div className="ml-[10px]">
                    <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                      {item.reciverid == data.uid
                        ? item.sendername
                        : item.recivername}
                    </p>
                    <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                      Dinner?
                    </h4>
                  </div>
                 
                </div>
                <div>
                <button
                    onClick={() => handleBlock(item)}
                    className="font-poppins font-medium text-[20px] bg-homecolor px-[15px]  rounded"
                  >
                    Block
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* My Group */}
        <MyGroup></MyGroup>
      </div>
    </div>
  );
};

export default Friends;
