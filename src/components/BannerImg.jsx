import React from 'react'

const BannerImg = ({imgsrc,imgAlt,className}) => {
  return (
    <img src={imgsrc} alt={imgAlt} className={`${className}`}/>
  )
}

export default BannerImg