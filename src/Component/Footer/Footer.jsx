import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import insta_icon from "../Assets/instagram_icon.png";
import pinte_icon from "../Assets/pintester_icon.png";
import what_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Trendify</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <Link to="https://instagram.com">
            <img src={insta_icon} alt="" />
          </Link>
        </div>
        <div className="footer-icon-container">
          <img src={pinte_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={what_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
