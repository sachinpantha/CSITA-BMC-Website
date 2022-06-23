import React from "react";
import "./header.css";
import Typewriter from "typewriter-effect";
import Particle from './Particle.jsx'
import IMG from "../../Assets/logohero.png";
const Header = () => {
  return (
      <section className="header">
<Particle />
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
 


    <div className="typewriter">
    <Typewriter
  options={{
    strings: ['We are Non-Political', 'We are Technological','We are Non-Profit','We are Community'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>

      
      </section>
  );
};

export default Header;
