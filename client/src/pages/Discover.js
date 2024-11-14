// src/pages/Discover.js
import React from 'react';
import '../styles/Discover.css';
import { useNavigate } from 'react-router-dom';

function Discover() {
  const navigate = useNavigate();
  return (
    <div className="discover">
      <h1>Discover Courses and Projects</h1>
      <div className="courses">
        <button className="course-card" onClick={()=> navigate('/swipe-project')}>Projects</button> 
      {/* develop the swipe functionality here in Projects button */}
        <button className="course-card" onClick={()=> navigate('/skill-development')}>Courses</button>
        
      </div>
    </div>
  );
}

export default Discover;
