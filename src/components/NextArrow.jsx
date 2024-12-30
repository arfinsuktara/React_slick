import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";

const NextArrow = (props) => {
  
    const { className,  onClick } = props;
    return (
      <div
      className={`inline-block text-4xl text-teal-500  absolute right-5 top-1/2  -translate-y-1/2 ${className}`}
     
      onClick={onClick}
   ><FaCircleArrowRight /></div>
    )
  
}

export default NextArrow