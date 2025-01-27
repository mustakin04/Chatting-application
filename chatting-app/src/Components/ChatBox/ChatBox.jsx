import React, { useEffect, useState } from "react";
import chatpic from "../../assets/Ellipse 7.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";
import message_img from "../../assets/registration.png";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const ChatBox = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [recivedMsg, setRecivedMsg] = useState([]);
  const db = getDatabase();
  const activeData = useSelector((state) => state.activeChat.value);
  const data = useSelector((state) => state.userInfo.information);

  const handleSend = () => {
    if (activeData.status == "single") {
      set(push(ref(db, "message/")), {
        msg: sendMessage,
        whosenderid: data.uid,
        whosendername: data.displayName,
        whoreciverid: activeData.id,
        whorecivername: activeData.name,
      });
    }
  };
  useEffect(() => {
    const starCountRef = ref(db, "message/");
    onValue(starCountRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        if (
          (item.val().whosenderid == data.uid &&
            item.val().whoreciverid == activeData.id) ||
          (item.val().whoreciverid == data.uid &&
            item.val().whosenderid == activeData.id)
        ) {
          arry.push(item.val());
        }
      });
      setRecivedMsg(arry);
    });
  }, []);
  console.log(recivedMsg, "0");
  console.log(sendMessage, "10");
  return (
    <div className="border p-[18px]">
      <div className="flex justify-between items-center border-b-2 border-[#000000] border-opacity-15 pb-[25px]">
        <div className="flex gap-[33px]">
          <img src={chatpic} alt="" />
          <div>
            <h2 className="font-poppins font-semibold text-[24px] text-[#000000]">
              {activeData.name}
            </h2>
            <p className="font-poppins font-normal text-[14px] text-[#000000]">
              Online
            </p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
      {/* Chatting */}

      <div className="snap-y h-[600px] overflow-y-auto overflow-x-hidden bg-chatbg ">
        <div className="px-[20px]">
          {recivedMsg.map((item, index) =>
            item.whosenderid == activeData.id ? (
              <div
                key={index}
                className=" relative max-w-[300px]  mt-[20px]"
              >
                <p
                  className="font-poppins max-w-[300px] inline-block font-medium text-[18px]  text-[#000000] 
        bg-[#F1F1F1]  py-[10px] px-[8px] rounded-sm "
                >
                  {item.msg}
                </p>
                <div className="absolute bottom-[25px] left-[-11px]  z-[999]">
                  <PiTriangleFill className=" text-[#F1F1F1] text-2xl" />
                </div>
                <h5
                  className="font-poppins font-medium text-[#000000] 
                  text-opacity-25 text-[12px] mt-[10px]"
                >
                  Today,2:15pm
                </h5>
              </div>
            ) : (
              <div key={index} className="flex justify-end">
                <div className="relative max-w-[300px] mt-[20px] text-end">
                  <p
                    className="font-poppins   max-w-[300px]  font-medium text-[18px] text-[#000000] 
              inline-block py-[10px] px-[8px] rounded-sm bg-[#5F35F5] "
                  >
                    {item.msg}
                  </p>
                  <div className="absolute bottom-[25.5px] right-[-11px] z-[999]">
                    <PiTriangleFill className=" text-[#5F35f5] text-2xl" />
                  </div>
                  <h5
                    className="font-poppins font-medium text-[#000000] 
        text-opacity-25 text-[12px] mt-[10px]"
                  >
                    Today,2:15pm
                  </h5>
                </div>
              </div>
            )
          )}
          {/* reciver part */}

          {/* sender part */}

          {/* reciver images */}
          <div className="mb-[20px]">
            <img
              src={message_img}
              alt=""
              className="w-[250px] h-[300px] object-cover rounded-lg"
            />
          </div>
          {/* reciver images */}
          <div className="flex justify-end items-center mb-[30px] ">
            <div className="w-[260px] h-[310px] p-2 bg-[#5F35f5]">
              <img
                src={message_img}
                alt=""
                className="w-[250px] h-[300px] object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
      {/* input flied */}
      <div className=" flex  items-center border-t-2">
        <input
          onChange={(e) => setSendMessage(e.target.value)}
          type="text"
          className="bg-[#F1F1F1] w-[557px] py-[12px] mt-[20px] font-poppins 
      font-normal text-[15px] px-[13px]"
        />
        <div
          className=" flex items-center text-center w-[45px] h-[48px] bg-[#5F35f5] ml-[20px]
      mt-[20px] rounded-sm"
        >
          <IoIosSend
            onClick={handleSend}
            className="text-3xl text-white pl-[10px] "
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
