import React from "react";
import ImG2 from "../../Assets/aboutimg.jpg";
import "./About.css";
const about = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={ImG2} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="a-title">About Us</h1>
        <div className="sep">
          <p className="a-sub" data-aos="fade-left">
            "<span style={{ fontWeight: "bold" }}>CSIT Association of BMC</span>{" "}
            is a non-political students union formed by
            CSIT students of Butwal Multiple campus on 2073BS with motive of
            helping students to solve their academic problems”
          </p>
          <br />
          <p className="a-desc" data-aos="fade-left" data-aos-delay={200}>
            We also organize several events targeting the newcomers to provide them a way to start their journey in the field of IT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
