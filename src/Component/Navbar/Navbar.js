import React from 'react'
import './Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";
export default function Navbar() {
  return (
    <nav className='nav-container'>
      <img src={require('../../assets/logo.png')} className='logo'></img>
      <ul className='mid-section'>
        <li className='navbar-link'>Home</li>
        <li className='navbar-link'>Practice</li>
        <li className='navbar-link'>Pro</li>
      </ul>
      <button className='nav-btn'>Login</button>
      <AiOutlineMenu className='menu-btn'/>
    </nav>
  )
}
