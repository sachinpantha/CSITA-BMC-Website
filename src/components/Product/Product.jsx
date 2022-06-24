import React from 'react'
import './Product.css'
const Product = ({img,title,link,id}) => {
  return (
    <>
    <a className='p' href={link} target='_blank'>
      <div className="project-info">
          <span className='p-title'>{title}</span>
      </div>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle" style={{'backgroundColor':'yellow'}}></div>
        <div className="p-circle" style={{'backgroundColor':'green'}}></div>
      </div>
        <img src={img} alt="" className='p-img' />
    </a>
    </>
  )
}

export default Product