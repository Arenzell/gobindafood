import React from 'react'
import logo from '../src/mainlogo.gif'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className='nav-bar'>
        <div className='nav-logo'>
          <img src={logo} id='nav-logo-img' alt='main-logo' />
          <h3>Gobinda's Dhaba</h3>
        </div>
        <div className='mav-menu'>
          <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
          <NavLink exact activeClassName='active-link' to='/veg'>Veg</NavLink>
          <NavLink exact activeClassName='active-link' to='/nonveg'>Non-Veg</NavLink>
          <NavLink exact activeClassName='active-link' to='/desert'>Deserts</NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>Contact Us</NavLink>
        </div>
      </div>
    </>
  )
}

export default Header;