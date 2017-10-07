import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import collectionList from './../../data/collections'
import closeIcon from './../../svg/close.svg'

class Submenu extends Component {

  // Maps the data objects in collectionList array to <NavLink /> components
  generateCollectionLinks() {
    const collectionLinks = collectionList.map((item, i) => {
      const linkRef = '/collections/' + item.name.replace(/\s+/g, '-').toLowerCase()
      return (
        <li key={i} className='submenu-item'>
          <NavLink
            exact
            to={linkRef}
            activeClassName='active-link'
            className='submenu-item-link'
            onClick={this.handleClick}
          >
            {item.name}
          </NavLink>
        </li>
      )
    })
    return collectionLinks
  }

  // On click, call prop function onMenuClick
  // This toggles the visibility of this submenu
  // If shouldPrevent === true, prevent the default action
  // This is used for preventing route changes when clicking <NavLink /> elements
  handleClick = (event, shouldPrevent = false) => {
    if(shouldPrevent) event.preventDefault()
    this.props.onMenuClick()
  }

  render() {
    return (
      <li className='nav-item has-submenu'>
        <NavLink to='/collections'
          onClick={(e) => this.handleClick(e, true)}
          activeClassName='active-link'
          className='nav-item-link'
        >
          Collections
        </NavLink>
        <ul className={this.props.menuActive ? 'submenu active' : 'submenu'}>
          <li className='submenu-header'>
            Collections
          </li>
          {this.generateCollectionLinks()}
        </ul>
        <div className='submenu-close'>
          <img src={closeIcon} alt='Close Menu' onClick={this.handleClick} />
        </div>
      </li>
    )
  }
}

Submenu.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  menuActive: PropTypes.bool.isRequired,
}

export default Submenu
