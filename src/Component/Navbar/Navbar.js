import React from 'react'
import './Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='nav-container'>
      <img src={require('../../assets/logo.png')} className='logo'></img>
      <ul className='mid-section'>
        <NavLink to='/' className='navbar-link'>Home</NavLink>
        <NavLink to='/Practice' className='navbar-link'>Practice</NavLink>
        <NavLink to='/Pro' className='navbar-link'>Pro</NavLink>
      
      </ul>
      <button className='nav-btn'>Login</button>
      <AiOutlineMenu className='menu-btn'/>
    </nav>
  )
}
