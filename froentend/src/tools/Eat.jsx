import React from 'react'
import '../css/Eat.css';

export default function Eat({details,actionFunc,actionName}) {
  return (
    <div className='cart'>
        <div className="left">
            <div className="cart-name">{details.name}</div>
            <div className="cart-price"><span>Rs.</span>{details.price}</div>
            <div className="cart-desc">{details.description}</div>
            <button className='btn btn-danger' onClick={()=>actionFunc(details)}>{actionName}</button>
        </div>
        <div className="right"><img src={details.imageURL} alt={details.description} /></div>
    </div>
  )
}