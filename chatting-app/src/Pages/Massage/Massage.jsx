import React from "react";
import Sliderbar from "../../Components/Sliderbar/Sliderbar";
import ChatBox from "../../Components/ChatBox/ChatBox";
import Groups from "../../Components/Groups/Groups";
import FriendMessage from "../../Components/FriendMessage/FriendMessage";

const Massage = () => {
  return (
    <div className="flex gap-[40px]">
      <Sliderbar active="msg"></Sliderbar>
      <div>
        <Groups></Groups>
        <FriendMessage></FriendMessage>
      </div>
      <div className="w-[715px]">
        <ChatBox></ChatBox>
      </div>
    </div>
  );
};

export default Massage;
