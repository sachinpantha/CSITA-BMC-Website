import React from 'react'
import IMG from "../Assets/logohero.png";
import './Header/header.css';
import {Link, scrollSpy} from 'react-scroll'
import { Links } from '../data';
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
        {
          Links.map((link,id)=>(
             <Link className='link' key={`${link.title}-${id}`} to={link.path} Spy={true} activeClass='active'>{link.title}</Link>
          ))
        }
      </ul>
      </div>
  )
}

export default Navigation