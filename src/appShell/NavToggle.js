import React from 'react'

const NavToggle = ({isActive, onToggle}) => {
  return (
    <div className={isActive ? 'header-item header-item-toggle nav-active' : 'header-item header-item-toggle'}>
      <div className='nav-toggle' onClick={onToggle}>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default NavToggle
