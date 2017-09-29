import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Submenu from './Submenu'

class NavLinks extends Component {
  constructor() {
    super()
    this.state = {
      submenuActive: false,
    }
  }

  onSubmenuClick = () => {
    this.setState({
      submenuActive: !this.state.submenuActive,
    })
  }

  render() {
    return (
      <ul className={this.state.submenuActive ? 'nav header-item submenu-active' : 'nav header-item'}>
        <li className='nav-item'>
          <NavLink
            to='/stream'
            activeClassName='active-link'
            className='nav-item-link'
            onClick={this.props.onNavClick}
          >
            Stream
          </NavLink>
        </li>
        <Submenu
          onMenuClick={this.onSubmenuClick}
          menuActive={this.state.submenuActive}
        />
        <li className='nav-item'>
          <NavLink
            to='/the-advantage'
            activeClassName='active-link'
            className='nav-item-link'
            onClick={this.props.onNavClick}
          >
            The&nbsp;<span className='desktop-only'>.</span>Advantage
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default NavLinks
