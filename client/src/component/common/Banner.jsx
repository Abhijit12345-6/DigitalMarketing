import React from "react";

const Banner = ({ pageName, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[350px]"
      style={{
        backgroundImage: `linear-gradient(to right, #E0FFE3, #F7EAFB), url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#cbe4ef] bg-opacity-20 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center h-full mt-12 text-black">
          <h1 className="text-4xl font-bold">{pageName}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
