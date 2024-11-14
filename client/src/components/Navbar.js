// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../assets/image"></img>
        <Link to="/">Freelance Hub</Link> {/* Logo text, can be replaced with an actual logo */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/skill-development">Skill Development</Link></li>
      </ul>
      <div className="navbar-auth">
        <Link to="/signin" className="btn btn-signin">Sign In</Link>
        <Link to="/signup" className="btn btn-signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
