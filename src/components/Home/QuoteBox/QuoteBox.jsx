import React from "react";

const QuoteBox = () => {
  return (
    <div className="bg-white my-8 md:my-20 mx-5 md:mx-15 rounded-2xl md:rounded-4xl">
      <div className="py-5 md:py-20 px-3 md:px-10 text-center">
        <div className="flex justify-center">
          <img
            className="w-8 h-8 md:w-25 md:h-25"
            src="public/assets/22a070fdd2e2a2d134a280d9c8a6959ae09e226e.png"
            alt=""
          />
        </div>

        <p className="text-2xl md:text-[44px] text-[#333333] font-bold">
          “I <span className="text-[#7F7F7F]">believe</span> that true justice
          <span className="text-[#7F7F7F]"> requires</span> not just{" "}
          <span className="text-[#7F7F7F]">knowledge </span>
          of the law, <span className="text-[#7F7F7F]">but the</span> courage to
          <span className="text-[#7F7F7F]"> fight</span> for it.”
        </p>
      </div>
    </div>
  );
};

export default QuoteBox;
