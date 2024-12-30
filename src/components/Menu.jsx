import React from 'react'

const Menu = ({className,menuName}) => {
  return (
  <li className={`text-sm font-dm fonnt-bold text-menuText hover:text-bold hover:text-menuTextH ${className}`}>{menuName}</li>
  )
}

export default Menu