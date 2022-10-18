import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/MainCart.css';

export default function MainCart({subItems,subName,imageURL}) {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/food/${subName}`)} className='main-cart'>
        <img src={imageURL} ></img>
        <div className='sub-name'>{subName}</div>
    </div>
  )
}