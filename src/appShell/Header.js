import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import identity from './../svg/identity.svg'
import wordmark from './../svg/wordmark.svg'
import NavLinks from './nav/NavLinks'
import NavToggle from './NavToggle'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      navActive: false,
    }
  }

  setNavState = () => {
    this.setState({
      navActive: !this.state.navActive,
    })
  }

  render() {
    return (
      <header>
        <div className='header-item header-item-logo'>
          <Link to='/stream'>
            <img src={identity} alt='Hometown Advantage' className='identity' />
            <img src={wordmark} alt='Hometown Advantage' className='wordmark' />
          </Link>
        </div>
        <NavToggle
          isActive={this.state.navActive}
          onToggle={this.setNavState}
        />
        <NavLinks
          onNavClick={this.setNavState}
        />
      </header>
    )
  }
}

export default Header
