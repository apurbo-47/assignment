import React from "react";
import "./card.css";

const data = [
  {
    title: "Legal Philosophy",
    text: "I believe in proactive defense and strategic negotiation. My goal is to resolve conflicts efficiently while ensuring your rights are never compromised.",
    icon: "⚖️",
  },
  {
    title: "Bar Admissions",
    text: "I believe in proactive defense and strategic negotiation. My goal is to resolve conflicts efficiently while ensuring your rights are never compromised.",
    icon: "🎓",
  },
  {
    title: "Education",
    text: "I believe in proactive defense and strategic negotiation. My goal is to resolve conflicts efficiently while ensuring your rights are never compromised.",
    icon: "📘",
  },
];

const Card = () => {
  return (
    <div className="container mt-8 mb-8 md:mt-20 md:mb-20 md:mx-8 gap-3 md:gap-5">
      <div
        className=" card "
        style={{
          backgroundImage: "url('src/assets/Group 1.png')",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" text-black text-sm md:text-2xl p-2 md:p-5 ">
          "Justice consists not in being neutral between right and wrong, but in
          finding out the right and upholding it."
          <br />
          <span className="text-xs md:text-xl font-bold">
            — Theodore Roosevelt
          </span>
        </h1>
      </div>
      {data.map((item, index) => (
        <div
          className="card"
          style={{
            backgroundImage: "url('src/assets/Group 1.png')",
          }}
          key={index}
        >
          <span className="icon">{item.icon}</span>
          <h3 className="text-xs md:text-xl font-bold">{item.title}</h3>
          <p className="text-xs md:text-base text-[#4C4C4C]">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
