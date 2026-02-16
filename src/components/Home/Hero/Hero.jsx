import React from "react";

const Hero = () => {
  return (
    <div className=" mt-6 md:mt-12 mb-6 md:mb-12">
      <div className="flex justify-between items-center mx-6 md:mx-12 ">
        <h3 className="text-[#333333] text-xs md:text-xl font-medium ">
          Premium Legal Service
        </h3>
        <img src="src/assets/Frame 2147229436.png" alt="" />
      </div>
      <h1 className=" text-5xl md:text-[204px] text-[#333333] text-center  font-bold">
        JACOB JONES
      </h1>
      <div className="flex justify-between text-xs md:text-3xl font-medium text-[#7F7F7F]/50 md:mx-12 mx-6 mb-6 md:mb-12">
        <p>Experienced </p>
        <p>Legal Solutions</p>
        <p>You Can Trust</p>
      </div>

      <div>
        <img
          className="h-40 w-90 rounded-lg md:rounded-none mx-auto md:h-150 md:w-full"
          src="src/assets/bee58f4d626b9d8baa5bfed861927b6933e5dfc1 (1).jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
