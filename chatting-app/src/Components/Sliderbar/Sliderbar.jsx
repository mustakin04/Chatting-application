import React, { useEffect, useState } from "react";
import image1 from "../../../src/assets/Ellipse 1.png";
import { IoHomeOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LiaFolderOpen } from "react-icons/lia";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { getDatabase, onValue, ref } from "firebase/database";

const Sliderbar = ({active}) => {
   const [friendRequest, setFriendRequest] = useState([]);
   const [notification,setNotification]=useState(()=>{
    const save=localStorage.getItem("notification")
    console.log(save,"20")
    return save?JSON.parse(save):true
   })
   const db = getDatabase();
   const data = useSelector((state) => state.userInfo.information);
  const auth = getAuth();
  const [show, setShow] = useState();
  const [image, setImage] = useState();
  // const [cropData, setCropData] = useState("");
  const datas = useSelector((state) => state.userInfo.information.displayName);
  useEffect(() => {
    localStorage.setItem("notification",JSON.stringify(notification))
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
  
  const evenHandle = () => {
    setShow(true);
  };
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
      console.log(files, "khg;");
    }
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result, "fgf");
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const handleSubmit = () => {
    //  console.log(auth)
  };
  const backHome = () => {
    setShow(false);
  };

  return (
    <div>
      <div>
        <div className="flex ">
          <div className="w-[186px] h-[954px] bg-[#5F35F5] pt-[12px]">
            <div className="group relative w-[100px] h-[100px] rounded-full m-auto">
              <img src={image1} alt="" />
              <div
                className="hover:bg-black w-[100px] group-hover:opacity-50 h-[100px] absolute top-0 left-0 
                        rounded-full opacity-0 flex justify-center items-center "
              >
                <IoCloudUploadOutline
                  onClick={evenHandle}
                  className="text-3xl text-white"
                />
              </div>
              <p className="text-[18px] text-white font-mono font-bold text-center">
                {datas}
              </p>
            </div>
            <div
              className="flex w-[155px] h-[89px] bg-white
                         rounded-l-lg ml-[22px] mt-[78px] mb-[57px]"
            >
              <Link to="/home">
                <IoHomeOutline
                  className="text-[#5F35F5] m-auto 
                            items-center text-center w-[46px]  h-[100px]"
                />
              </Link>
            </div>
            <div>
              <Link to="/massage">
                <RiMessage2Line className="bg-white w-[46px] h-[46px] m-auto" />
              </Link>
            </div>
            <div className="relative">
              
              <IoMdNotificationsOutline className="bg-[#5F35F5] text-white 
              w-[46px] h-[50px] m-auto my-[83px]" />
              {
                friendRequest.length>0?(
                  notification&&
                  <p onClick={()=>setNotification(false)}
                   className="absolute top-[-14px] left-[90px] text-white text-3xl
                    bg-red-400 w-[25px] h-[25px] rounded-full"></p>):""
                
              }
            </div>
            <div>
              <CiSettings className="bg-[#5F35F5] text-white w-[46px] h-[46px] m-auto" />
            </div>
            <div className="pt-[187px]">
              <LiaFolderOpen className=" text-white w-[46px] h-[46px] m-auto " />
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="absolute bg-blue-400 w-full h-full  top-0 left-0 z-[9999] ">
          <div className="bg-white  w-[500px] m-auto ">
            {/* <ToastContainer /> */}

            <div className="m-8">
              <p className="text-center font-sans font-bold text-[25px] mb-[18px]">
                Image Upload
              </p>

              {image && (
                <>
                  <div className="overflow-hidden w-[100px] h-[100px] m-auto mb-5">
                    <div className="img-preview w-[100px] h-[100px] "></div>
                  </div>
                  <Cropper
                    // ref={cropperRef}
                    style={{ height: 400, width: "100%" }}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                    guides={true}
                  />
                </>
              )}
              <div className="border-b-[2px] b">
                <input type="file" onChange={onChange} />
              </div>
              <p className="bg-pink-400 w-[368px] mt-[5px] rounded-[2px]"></p>
              <div className="py-[20px]">
                <button
                  onClick={handleSubmit}
                  className="bg-orange-400 py-[7px] px-[15px] rounded-sm"
                >
                  Upload
                </button>
                <button
                  className="ml-[20px] bg-lime-500 py-[7px] px-[15px] rounded-sm"
                  onClick={backHome}
                >
                  <Link to="/home"> Back to Home</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sliderbar;
