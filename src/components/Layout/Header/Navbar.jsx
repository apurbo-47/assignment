import React, { useState } from "react";
import "./Nabar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="src/assets/Mask group.png" alt="" />
        </div>

        {/* Menu */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li className="">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>

          {/* Mobile Button */}
          <li className="mobile-btn">
            <button>Book Consultation</button>
          </li>
        </ul>

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
