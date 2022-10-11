import React from "react";
import "./header.css";
import Typewriter from "typewriter-effect";
import Particles from "react-particles-js";
import { particlesConfig } from "../../constant/Constant";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Header = () => {
  document.oncontextmenu = () => {
    alert('Right click is disabled in this website!')
    return false
  }
  document.onkeydown = (e) => {
    if (e.key == 'F12') {
      alert('Dont try to inspect element using F12 key')
      return false
    }
    if (e.ctrlKey && e.key == "u") {
      alert('Dont try to view page source')
      return false
    }
    if (e.ctrlKey && e.shiftKey && e.key == "I") {
      alert('You cant inspect element')
      return false
    }
  }
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
      <MessengerCustomerChat pageId="151990145269970" appId="590338082605549" />
    </section>
  );
};

export default Header;
