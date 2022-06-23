import React from "react";
import "./header.css";
import IMG from "../../Assets/logohero.png";
const Header = () => {
  return (
      <section className="header">
      <div className="logo">
        <img src={IMG} alt="" />
      </div>
      <div className="nav-area">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Event</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Partners</a></li>
      </div>
      </section>
  );
};

export default Header;
