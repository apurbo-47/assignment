import React, { useState } from "react";
import "./Nabar.css";
import menuItems from "../../../constants/navData.constant";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="/assets/Mask-group.png" alt="" />
        </div>
        <div className="flex gap-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              className="nav-links py-2.5 px-5 hover:bg-black hover:text-white rounded-[14px] transform duration-300 transition-all"
              href={item.path}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="cta-btn">Book Consultation</button>
        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
