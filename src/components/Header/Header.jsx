import React from "react";
import "./header.css";
import Typewriter from "typewriter-effect";
import Particles from "react-particles-js";
import { particlesConfig } from "../../constant/Constant";
const Header = () => {
  return (
    <section data-aos="fade-up" className="header" id="home">
      <Particles className="particles" params={particlesConfig} />

      <div className="typewriter">
        <Typewriter
          options={{
            strings: [
              "We are Non-Political",
              "We are Technological",
              "We are Non-Profit",
              "We are Community",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </section>
  );
};

export default Header;
