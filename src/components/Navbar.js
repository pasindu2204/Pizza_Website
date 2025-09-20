import React from 'react';
import logo from '../assents/images.png';
import {Link} from 'react-router-dom'; 
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={logo} />
        </div>
        <div className='rightside'>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
