import React from 'react'
import PropTypes from 'prop-types'

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

NavToggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default NavToggle
