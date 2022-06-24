import React from 'react'
import './Teams.css'
const Teams = ({img,Name,Post}) => {
  return (
    <div className='parent'>
    <div>
        <img src={img} alt="" className='p-img' />
        </div>
        <div className='naming'>
        <div className='Name'>{Name}</div>
        <div className='Post'>{Post}</div>
        </div>
    </div>
  )
}

export default Teams