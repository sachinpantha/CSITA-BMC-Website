import React from "react";
import { BsFacebook } from "react-icons/bs";
import "./Teams.css";
const Teams = ({ img, Name, Post, Facebook }) => {
  return (
    <div className="parent">
      <div>
        <img src={img} alt="" className="p-img" />
      </div>
      <div className="naming">
        <div className="Name">{Name}</div>
        <div className="Post">{Post}</div>
        <div>
          <a href={Facebook} target="_blank">
            <BsFacebook color="#3B5998" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Teams;
