import React from "react";
import "./ScrollBar.css";

const items = [
  "NEW YORK STATE BAR.",
  "SUPER LAWYERS 2024.",
  "BEST LAWYERS IN AMERICA.",
  "TOP ATTORNEYS.",
  "LEGAL EXCELLENCE AWARD.",
];

const ScrollBar = () => {
  return (
    <div>
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="scroll-item">
              <img src="/assets/Frame.png" alt="" /> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;
