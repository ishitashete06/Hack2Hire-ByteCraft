// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Optional for custom styles

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/skill-development">Skill Development</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
