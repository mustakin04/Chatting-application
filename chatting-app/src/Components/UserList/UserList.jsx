import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import fried1 from "../../assets/Ellipse 5.png";
import PlusButton from "../PlusButton/PlusButton";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";
import FriendBlock from "../FriendBlock/FriendBlock";

const UserList = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.userInfo.information);

  const [userList, setUserList] = useState([]);
  const [friendRequestList, setFriendRequestList] = useState([]);
  const [friend,setFriend]=useState([])
  const[blockList,setBlockList]=useState([])
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        // console.log(item.val(), "ok")
        if ( data.uid!=item.key)
          arry.push({ ...item.val(), userid: item.key });
      });
      setUserList(arry);
    });
  }, []);
// console.log(userList,"ok")
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
//  console.log(friend,"62")
// ##### --block part---#####
 useEffect(() => {
    const blockRef = ref(db, "block/");
    onValue(blockRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
      console.log(snapshot.val(),"68")
        arry.push(item.val().blockbyid+item.val().blockid);
      });
      setBlockList(arry);
    });
  }, []);
  console.log(blockList,"74")
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
                { blockList.includes(data.uid + item.blockbyid) ||
                blockList.includes(item.blockbyid + data.uid) 
                ?(<div>block</div>)
                :
                  friend.includes(data.uid + item.userid) ||
                  friend.includes(item.userid + data.uid) 
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
     {/* Friend Block list */}
     <FriendBlock></FriendBlock>
    </div>
  );
};

export default UserList;
