import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer mt-20 "
      style={{
        backgroundImage: "url('/assets/image1978.png')",
        backgroundSize: "cover",
        height: "110px",
      }}
    >
      <div className="footer-container p-5 gap-5 md:gap-56">
        {/* Logo */}
        <img
          className="bg-white rounded-lg"
          src="/assets/Mask-group.png"
          alt=""
        />

        {/* Menu */}
        <ul className="footer-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
