import React from "react";

const Details = () => {
  return (
    <div className="px-5 py-4 my-6 flex flex-col justify-center items-center ">
      <img src="/image-2.webp" alt="img2" className="w-full h-auto " />
      <div>
        <div className="shadow-2xl flex items-center py-3 px-3 space-x-3 my-4 rounded-2xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
          >
            <path
              d="M5.367 2.36968L0.839844 4.01463V8.20995C0.839844 12.0213 0.849325 12.4479 0.925172 12.9457C1.27597 15.1785 2.17192 16.9277 3.7979 18.5395C4.76496 19.5018 5.7652 20.2223 7.09727 20.9144C8.09751 21.4359 9.57654 22 9.93208 22C10.1122 22 11.2025 21.6302 11.814 21.36C13.3879 20.6679 14.7863 19.7578 15.8909 18.6959C17.7207 16.9419 18.7541 14.8134 18.9722 12.3294C19.0054 11.9407 19.0196 10.419 19.0101 7.87338L18.9959 4.00989L14.4687 2.36494C11.98 1.45951 9.93208 0.719999 9.91786 0.719999C9.90364 0.719999 7.85575 1.45951 5.367 2.36968ZM14.4924 8.34743L15.0139 8.86888L11.705 12.1777L8.4009 15.4818L6.61374 13.6947L4.82658 11.9075L5.35752 11.3719L5.88845 10.8362L7.14468 12.0924L8.4009 13.3486L11.1646 10.5849C12.6816 9.06798 13.933 7.82597 13.9473 7.82597C13.9615 7.82597 14.208 8.063 14.4924 8.34743Z"
              fill="#1962F2"
            ></path>
          </svg>
          <h1 className=" text-[#4b5563] font-bold text-base ">
            Customers’ Needs Above All Else
          </h1>
        </div>
        <h1>
          Take Control <br />
          <span>Monitor Usage & Change Filters</span>No Technician Needed
        </h1>
      </div>
    </div>
  );
};

export default Details;
