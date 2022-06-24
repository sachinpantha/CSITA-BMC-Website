import React from 'react'
import Product from '../Product/Product'
import { products } from '../../data'
import './List.css'
const List = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">        
        </div>
        <div className="pl-list">
            {products.map((item)=>(
                <Product title={item.title} key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default List