import React from 'react'

const Image = ({imgsrc,imgAlt,className}) => {
  return (
    <img src={imgsrc} alt={imgAlt} className={`${className}`}/>
  )
}

export default Image