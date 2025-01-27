import React, { useEffect, useState } from "react";
import Sliderbar from "../../Components/Sliderbar/Sliderbar";
import Friends from "../../Components/Friends/Friends";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserList from "../../Components/UserList/UserList";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import GroupList from "../../Components/GroupList/GroupList";

const Home = () => {
  const auth = getAuth();
  const [verifaied, setVerified] = useState(false);
  const data = useSelector((state) => state.userInfo.information);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  });
  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerified(true);
    }
  });
  return (
    <>
      {verifaied ? (
        <div className="flex gap-[60px]">
          <Sliderbar active="home"></Sliderbar>
          {/* Group list and Friend Request */}
          <GroupList></GroupList>

          <Friends></Friends>
          <UserList></UserList>
        </div>
      ) : (
        <p>not</p>
      )}
    </>
  );
};

export default Home;
