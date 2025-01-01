import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import fried1 from "../../assets/Ellipse 5.png";
import fried2 from "../../assets/Ellipse 6.png";
import fried3 from "../../assets/Ellipse 7.png";
import fried4 from "../../assets/Ellipse 8.png";
import PlusButton from "../PlusButton/PlusButton";
import UnBlock from "../UnBlock/UnBlock";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";

const UserList = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.userInfo.information);

  const [userList, setUserList] = useState([]);
  const [friendRequestList, setFriendRequestList] = useState([]);
  const [friend,setFriend]=useState([])
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        // console.log(item.key, "ok")
        if (item.key != data.uid)
          arry.push({ ...item.val(), userid: item.key });
      });
      setUserList(arry);
    });
  }, []);

  const handlePlus = (item) => {
    console.log(item);
    set(push(ref(db, "friendsRequest/")), {
      sendername: data.displayName,
      senderid: data.uid,
      recivername: item.username,
      reciverid: item.userid,
    });
  };
  useEffect(() => {
    const starCountRef = ref(db, "friendsRequest/");
    onValue(starCountRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        arry.push(item.val().senderid + item.val().reciverid);
      });
      setFriendRequestList(arry);
    });
  }, []);
  // console.log(friendRequestList,"fri")
  useEffect(() => {
    const friendRef = ref(db, "friend/");
    onValue(friendRef, (snapshot) => {
        // console.log(snapshot.val(),"55")
      let arry = [];
      snapshot.forEach((item) => {
        arry.push(item.val().senderid + item.val().reciverid);
      });
      setFriend(arry);
    });
  }, []);
 console.log(friend,"62")
  return (
    <div className="w-[414px]">
      <div className="p-[12px] border   bg-white">
        <div className="flex justify-between  ">
          <p className="font-poppins font-semibold text-[20px] text-[#000000]">
            User List
          </p>
          <BsThreeDotsVertical />
        </div>
        {userList.map((item, index) => (
          <div key={index} className="border-b-[2px] pb-[13px] mt-[12px]">
            <div className="flex  items-center">
              <img src={fried1} alt="" />
              <div className="flex  ml-[11px]">
                <div>
                  <p
                    className="font-poppins font-semibold text-[18px]
                                         text-[#000000]"
                  >
                    {item.username}
                  </p>
                  <h4
                    className="w-[300px] font-poppins font-medium text-[14px] 
                                        text-[#4D4D4D]"
                  >
                    {item.email}
                  </h4>
                </div>
                {
                  friend.includes(data.uid + item.userid) ||
                  friendRequestList.includes(item.userid + data.uid) 
                 ?(<div
                    className="cursor-pointer"
                    onClick={() => handlePlus(item)}
                  >
                    <button disabled>friend</button>
                  </div>)
                 :
                friendRequestList.includes(data.uid + item.userid) ||
                friendRequestList.includes(item.userid + data.uid) 
                ? (
                  <div
                    className="cursor-pointer"
                    onClick={() => handlePlus(item)}
                  >
                    <button disabled>panding</button>
                  </div>
                ) : (
                  <div
                    className="cursor-pointer"
                    onClick={() => handlePlus(item)}
                  >
                    <PlusButton></PlusButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* blocked users */}
      <div className="px-[20px] py-[13px] shadow-demo border mt-[20px]  bg-white">
        <div className="flex justify-between mb-[17px]">
          <p className="font-poppins font-semibold text-[20px]">
            Friend Request
          </p>
          <BsThreeDotsVertical />
        </div>
        <div className="border-b-[2px] pb-[13px] ">
          <div className="flex justify-between items-center mr-[20px]">
            <div className="flex gap-4 items-center">
              <img src={fried1} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Raghav
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  Dinner?
                </h4>
              </div>
            </div>
            <div>
              <UnBlock></UnBlock>
            </div>
          </div>
        </div>
        <div className="border-b-[2px] py-[13px]">
          <div className="flex justify-between items-center mr-[20px]">
            <div className="flex gap-4 items-center">
              <img src={fried2} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Swathi
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  Sure!
                </h4>
              </div>
            </div>
            <UnBlock></UnBlock>
          </div>
        </div>
        <div className="border-b-[2px] py-[13px]">
          <div className="flex justify-between items-center mr-[20px]">
            <div className="flex gap-4 items-center">
              <img src={fried3} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Kiran
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  hi
                </h4>
              </div>
            </div>
            <UnBlock></UnBlock>
          </div>
        </div>
        <div className=" py-[13px]">
          <div className="flex justify-between items-center mr-[20px]">
            <div className="flex gap-4 items-center">
              <img src={fried4} alt="" />
              <div>
                <p className="font-poppins font-semibold text-[18px] text-[#000000]">
                  Kiran
                </p>
                <h4 className="font-poppins font-medium text-[14px] text-[#4D4D4D]">
                  hi
                </h4>
              </div>
            </div>
            <UnBlock></UnBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
