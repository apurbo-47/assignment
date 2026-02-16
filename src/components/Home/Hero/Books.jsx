import React from "react";
import "./Books.css";

const Books = () => {
  return (
    <div
      className="m-5 md:m-20 rounded-4xl mb-12 "
      style={{
        backgroundImage:
          "url('/assets/e0c587d7888c4417c3e240a7fd321de78d2a88df.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="grid md:grid-cols-3 justify-center text-center ">
        <div className="avatars m-20">
          <img src="/assets/Group1707480877.png" alt="" />
        </div>
        <div className="mt-8 mb-8 md:mt-16 md:mb-16">
          <h1 className="md:text-4xl text-xl text-white font-bold  mb-6">
            Need Legal Help? Let’s Protect Your Rights Today.
          </h1>
          <p className="md:text-lg text-xs text-white font-medium mb-7">
            Get expert legal advice from an experienced lawyer you can trust.
            Fast response. Clear guidance. Confidential consultation.
          </p>
          <button className=" bg-white text-xs lg:text-base rounded-2xl py-2 px-4 md:py-4 md:px-5 text-black hover:bg-blue-600 hover:text-white">
            Book Consultation ›
          </button>
        </div>
        <div className="avatars m-20">
          <img src="/assets/Group1707480878.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Books;
