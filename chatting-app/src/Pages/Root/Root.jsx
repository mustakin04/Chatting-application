import React from "react";
import facebook from "../../assets/Fbicon.jpg"
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";

const Root = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 .. w-full h-screen">
      <Container className="flex ">
        <div className="w-[60%]">
          <div className="flex items-center mt-[150px]">
            <h1
              className="text-white text-[40px] 
                font-poppins font-semibold pt-[5px] "
            >
              Facebook
            </h1>
            <div className="bg-white overflow-hidden w-[50px] h-[50px]  rounded-md ml-[3px] ">
              <img className="w-[50px] h-[50px] object-cover" src={facebook} alt="" />
            </div>
          </div>
          <div className="mt-[100px]">
            <p className="font-poppins font-normal text-yellow-50 justify-center">
              Experienced web developer with a passion for creating innovative,
              user-friendly websites and applications. Skilled in front-end and
              back-end development, with expertise in modern web technologies
              and responsive design. Known for delivering efficient,
              high-quality solutions that enhance user experience. Strong
              problem-solver with excellent communication and collaboration
              skills.
            </p>
            <p className="font-poppins font-normal text-yellow-50 justify-center mt-[20px]">
              Constantly learning to stay ahead in the fast-evolving tech
              landscape. Ready to make an impact with creative, cutting-edge
              digital solutions.
            </p>
          </div>
        </div>
        <div className="w-[40%] flex justify-end items-center">
          <div
            className="w-[400px] h-[700px] bg-fuchsia-300 mt-[120px]  border-[10px]
           border-gray-50 rounded-[20px] px-[30px]"
          >
            <div className="flex  items-center mt-[50px] ">
              <h1
                className="text-white text-[20px] 
                font-poppins font-semibold pt-[5px] "
              >
                Facebook
              </h1>
              <h2 className="bg-white text-blue-600 rounded-md text-[15px] ont-poppins font-semibold px-[5px]">
                f
              </h2>
            </div>
            <div className="font-poppins font-medium text-yellow-50 text-[17px] mt-[20px]">
              <p>
                Constantly learning to stay ahead in the fast-evolving tech
                landscape.
              </p>
              <div className="bg-facebook  bg-cover bg-center h-[350px] w-full object-cover mt-[10px] mb-[10px] rounded-lg"></div>
            </div>
            <button className="w-full py-[10px] bg-green-300 font-poppins font-light text-white
             text-[20px] rounded mb-[20px]"><Link to="/registration">sign up</Link></button>
            <button className="w-full py-[10px] bg-teal-300 font-poppins font-light
             text-white text-[20px] rounded"><Link to="login">sign in</Link></button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Root;