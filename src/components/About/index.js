import React from "react";
// import profilePic from "../../../public/profilepic.webp";

const About = () => {
  return (
    <div className="bg-[#1c1c3a] flex flex-col lg:flex-row items-center px-5  lg:px-[40px] py-6 lg:py-[40px] rounded-[32px] lg:rounded-2xl ">
      <img
        src="/profile-pic.webp"
        alt="profile"
        className=" lg:h-[550px] w-[550px]"
      />
      <div className="flex flex-col justify-around items-center my-5  lg:px-[40px] xl:px-[80px] ">
        <h1 className="text-white text-[40px] lg:text-[42px]  xl:text-[60px] font-medium font-PlusJakarta tracking-wide text-center">
          Gauge Water Purifier <span className="text">Puts An End </span> to RO
          service pain
        </h1>
        <h1 className="text-[#6b6b6b] my-4 lg:my-6 px-12 text-base font-[500] text-center ">
          Fully automatic water purifier provides the highest water savings
          while ensuring a seamless service experience.
        </h1>
        <button className="bg-[#3b82f6] py-4 my-6 px-12 rounded-3xl hover:opacity-90 text-white font-bold text-base">
          Take a product Tour
        </button>
        <h1 className="text-[#b5b5b5] my-4 px-12 text-base font-[500] text-center ">
          Experience Convenience Like Never Before With Our Smart Water Purifier
        </h1>
      </div>
    </div>
  );
};

export default About;
