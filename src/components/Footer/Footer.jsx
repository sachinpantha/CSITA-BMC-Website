import React from 'react'
import logo from '../../Assets/logohero.png'
import {BsFillTelephoneFill,BsFacebook} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import { IconContext } from "react-icons";
import './footer.css'
const Footer = () => {
  return (
    <div className='FooterDiv'>

<footer>
    <div className="contact-item-wrapper">
    <ContactItem
icon={<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>


<BsFillTelephoneFill />



</IconContext.Provider>}
title="Phone"
text="+9779866142435"
/>
<ContactItem
icon={<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>


<HiLocationMarker />



</IconContext.Provider>}
title="Address"
text="Butwal-Golpark"
/>
<ContactItem
icon={<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>


<MdEmail />



</IconContext.Provider>}
title="Email"
text="csitassociationbmc@gmail.com"
/>


    </div>
<div className="social-item-wrapper">

    <span className="logo-bmc">
        <img src={logo} />
    </span>
    <div className="social-links-wrapper">

    <SocialLink
   
    sicon = {
    <IconContext.Provider value={{ color: "white", size:"33px", className: "global-class-name" }}>
    <a href='https://www.facebook.com/csit.bmc/' target="_blank">
    
    <BsFacebook />
    </a>
    
    
    </IconContext.Provider>
    
    
    }

 
    
    />
    
    <h3 className='copyright-section'>© 2022 CSIT Association Of BMC. All Rights Reserved. </h3>
    <h5 className='copyright-section'>Developed by <a className='credit' target='_blank' href="https://www.facebook.com/sachin.nihc">Sachin Pantha</a>  and <a className='credit' target='_blank' href="https://www.facebook.com/itsmesarad">Sarad Gyawali</a> &lt;3</h5>
    
 
    </div>
</div>



</footer>

    </div>
  )
}

export default Footer

function ContactItem(props){
    return(
        
<section className='footer-contact'>

        <div className='container'>
        <span className='icon'>
           
            
           {props.icon}

       </span>
            <div className="contact-desc">

      
        <span>

        <h1 className='heading-social'>{props.title}</h1>
        </span>

        <div className="info">
            <p>{props.text}</p>
        </div>

            </div>

        </div>
</section>
        
        
    )
}

function SocialLink(props){
    return(
        <div className='social-icons'>
          {props.sicon}
        </div>
    )
}

