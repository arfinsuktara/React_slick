import React from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
    className={`inline-block text-4xl text-teal-500 absolute left-5 top-1/2 z-10 -translate-y-1/2 ${className}`}
   
    onClick={onClick}
 ><FaCircleArrowLeft /></div>
  )
}

export default PrevArrow