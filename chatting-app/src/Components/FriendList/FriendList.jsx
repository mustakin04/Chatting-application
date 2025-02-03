import React, { useEffect, useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import group1 from "../../assets/Ellipse 2.png";
import Accept from "../Accept/Accept";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from "react-redux";

const FriendList = () => {
  const [friendRequest, setFriendRequest] = useState([]);
  const db = getDatabase();
  const data = useSelector((state) => state.userInfo.information);
  useEffect(() => {
    const starCountRef = ref(db, "friendsRequest/");
    onValue(starCountRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().reciverid) {
          arry.push({...item.val(),userid:item.key});
        }
      });
      setFriendRequest(arry);
    });
  }, []);
  console.log(friendRequest, "lo")
  const handleFriend = (item) => {
    set(push(ref(db, "friend/")), {
      ...item
    }).then(()=>{
        remove(ref(db,"friendsRequest/"+item.userid))
    });
  };
  return (
    <div className="ml-[43px] mt-[30px] w-[427px]">
      <div className="border  rounded-2xl">
        
        {/* Friend Request */}
        <div className="px-[20px] py-[13px] shadow-demo bg-white ">
          <div className="flex justify-between mb-[17px]">
            <p className="font-poppins font-semibold text-[20px]">
              Friend Request
            </p>
            <PiDotsThreeVerticalBold />
          </div>
          {friendRequest.map((item, index) => (
            <div key={index} className="border-b-[2px] pb-[13px] ">
              <div className="flex justify-between items-center mr-[20px]">
                <div className="flex gap-4 items-center">
                  <img src={group1} alt="" />
                  <div>
                    <p
                      className="font-poppins font-semibold text-[18px] 
                                            text-[#000000]"
                    >
                      {item.sendername}
                    </p>
                    <h4
                      className="font-poppins font-medium text-[14px] 
                                            text-[#4D4D4D]"
                    >
                      Dinner?
                    </h4>
                  </div>
                </div>
                <div onClick={() => handleFriend(item)}>
                  <Accept></Accept>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
