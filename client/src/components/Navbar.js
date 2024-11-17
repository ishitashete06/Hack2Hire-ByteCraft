// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext';  // Import useAuth hook
import '../styles/Navbar.css';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();  // Access Auth Context
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();  // Call logout from Auth Context
    navigate('/signin');  // Navigate to Sign In page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Freelance Hub</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/swipe-project">Projects for You</Link></li>
      </ul>
      <div className="navbar-auth">
        {isAuthenticated ? (
          <>
            <span className="navbar-user">Welcome, {user?.username}</span>
            <button onClick={handleSignOut} className="btn btn-signout">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="btn btn-signin">Sign In</Link>
            <Link to="/signup" className="btn btn-signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
