import React, { useEffect, useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import fried1 from "../../assets/Ellipse 5.png";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { activechatinfo } from "../../Slice/activeChatSlice";

const FriendMessage = () => {
  const db = getDatabase();
  const dispatch = useDispatch();
  const [friend, setFriend] = useState([]);
  const [friendData, setFriendData] = useState("");
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
  const handleFriendData = (item) => {
    // console.log(item,"31")
    if (data.uid == item.senderid) {
      dispatch(
        activechatinfo({
          status:"single",
          id: item.reciverid,
          name: item.recivername,
        })
      );
      localStorage.setItem(
        "activeChatData",
        JSON.stringify({
          status:"single",
          id: item.reciverid,
          name: item.recivername,
        })
      );
    } else {
        dispatch(
            activechatinfo({
              status:"single",
              id: item.senderid,
              name:item.sendername,
            })
          );
          localStorage.setItem(
            "activeChatData",
            JSON.stringify({
              status:"single",
              id: item.senderid,
              name: item.sendername,
            })
          );
    }
  };
  return (
    <div>
      <div className="w-[427px]  ml-[43px]  ">
        <div className="px-[20px] mt-[40px] border mb-[40px] rounded-2xl py-[25px]">
          <div className="flex justify-between mb-[17px] ">
            <p className="font-poppins font-semibold text-[20px]">Friend </p>
            <PiDotsThreeVerticalBold />
          </div>
          {friend.map((item, index) => (
            <div
              key={index}
              onClick={() => handleFriendData(item)}
              className="border-b-[2px] pb-[13px] mt-[12px]"
            >
              <div className="flex  items-center">
                <img src={fried1} alt="" />
                <div className="flex gap-[92px] ml-[11px]">
                  <div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendMessage;
