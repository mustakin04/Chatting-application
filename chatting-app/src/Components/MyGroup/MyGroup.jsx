import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import fried1 from "../../assets/Ellipse 5.png";
import fried2 from "../../assets/Ellipse 6.png";
import fried3 from "../../assets/Ellipse 7.png";
import fried4 from "../../assets/Ellipse 8.png";
const MyGroup = () => {
  return (
    <div>
      <div>
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

export default MyGroup;
