import React, {useState} from 'react'
import './Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";
import DropdownMenu from './DropdownMenu';
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='nav-container'>
      <img src={require('../../assets/logo.png')} className='logo'></img>
      <ul className='mid-section'>
        <li className='navbar-link'>Home</li>
        <li className='navbar-link'>Practice</li>
        <li className='navbar-link'>Pro</li>
      </ul>
      <button className='nav-btn'>Login</button>
        <AiOutlineMenu className='menu-btn' onClick={toggleMenu}/>
        {isMenuOpen && (
          <select className="navbar-menu">
            <NavLink>Profile</NavLink>
            <NavLink>Logout</NavLink>
          </select>
        )}
    </nav>
  )
}
