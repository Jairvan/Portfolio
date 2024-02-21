import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="header">
      <h2>Portfolio</h2>

      <nav class="navbar">
        <a href='/intro' class = 'active'>Home</a>
        <a href='/skills' class = 'active'>Skills</a>
      </nav>
    </div>  
  )
}

export default Navbar;