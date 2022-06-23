import React from 'react'
import IMG from "../Assets/logohero.png";
import './Header/header.css';
const Navigation = () => {
    window.onscroll=()=>{
        let navbar=document.querySelector('.nav-area');
        if(window.scrollY>300){
          navbar.classList.add('toggle');
        }
        else{
          navbar.classList.remove('toggle');
        }
      }
  return (
             <div className="nav-area">
      <div className="logo">
        <img src={IMG} alt="" />
      </div>
      <ul className="navlinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#event">Event</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#partner">Partners</a></li>
      </ul>
      </div>
  )
}

export default Navigation