import React from "react";
import CountUp from "react-countup";

const Hero2 = () => {
  return (
    <div className="border-2 m-2 md:m-15 bg-white rounded-4xl border-white">
      <div className="m-4 md:m-10">
        <div className="md:hero-content gap-6 md:gap-10 ">
          <img
            src="/assets/fe849a34f7597a00a2426f43d0c27e6631823dcd.png"
            className=" w-full md:w-[50%] h-50 md:h-full rounded-4xl shadow-2xl"
          />
          <div className="md:w-[50%]">
            <button className="border mt-3 px-4 py-2 md:px-7  md:py-3 text-xs md:text-base rounded-2xl hover:bg-black hover:text-white ">
              About Me
            </button>
            <h1 className="text-sm md:text-5xl font-bold py-2 md:py-6 text-[#333333]">
              A steadfast advocate for justice and your personal rights.
            </h1>
            <p className=" py-3 md:py-6 text-xs md:text-lg text-[#4C4C4C]">
              I founded my practice on a simple premise: every client deserves a
              fierce advocate who combines legal expertise with genuine
              compassion. With over 15 years of experience in high-stakes
              litigation, I bring a strategic, results-oriented approach to
              every case.
            </p>

            <div className="flex gap-2 md:gap-4">
              <div className="border border-[#E6E6E6] rounded-3xl px-5 py-4 md:*:px-9 md:py-7 text-2xl lg:text-4xl font-bold mt-4 hover:bg-black hover:text-white">
                <div className="flex">
                  <CountUp end={99} duration={12}></CountUp>
                  <p>%</p>
                </div>

                <p className="text-xs mt-3  ">Client Satisfaction</p>
              </div>

              <div className="border border-[#E6E6E6] rounded-3xl px-5 py-4 md:px-9 md:py-7 text-2xl lg:text-4xl font-bold mt-4 hover:bg-black hover:text-white">
                <div className="flex">
                  <CountUp end={500} duration={12}></CountUp>
                  <p>+</p>
                </div>

                <p className="text-xs mt-3  ">Cases Won</p>
              </div>
              <div className="border border-[#E6E6E6] rounded-3xl px-5 py-4 md:px-9 md:py-7 text-2xl lg:text-4xl font-bold mt-4 hover:bg-black hover:text-white">
                <div className="flex">
                  <CountUp end={24} duration={12}></CountUp>
                  <p>/7</p>
                </div>

                <p className="text-xs mt-3">Legal Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
