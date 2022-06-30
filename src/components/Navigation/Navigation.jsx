import React,{useState} from 'react'
import IMG from "../../Assets/logohero.png";
import {GiHamburgerMenu} from "react-icons/gi"
import "./navigation.css"
import {Link, scrollSpy} from 'react-scroll'
import { Links } from '../../data';
const Navigation = () => {
    window.onscroll=()=>{
        let navbar=document.querySelector('.nav-area');
        if(window.scrollY>720){
          navbar.classList.add('toggle');
        }
        else{
          navbar.classList.remove('toggle');
        }
      }
      const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
             <div className="nav-area">
      <div className="logo">
        <img src={IMG} alt="" />
      </div>
      <button className="hamburger" 
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}
      >
       <GiHamburgerMenu className='ham-icon'/>
      </button>
      <ul className={isNavExpanded?"navlinks expanded":"navlinks"}>
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