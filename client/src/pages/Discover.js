// src/pages/Discover.js
import React from 'react';
import '../styles/Discover.css';
import { useNavigate } from 'react-router-dom';

function Discover() {
  const navigate = useNavigate();
  return (
    <div className="discover">
      <h1>Discover Courses, Projects, and Assessments</h1>
      <div className="cards-container">
        <button className="card" onClick={() => navigate('/skill-development')}>
          <h2>Courses</h2>
          <p>Explore a variety of courses to enhance your skills.</p>
        </button>

        <button className="card" onClick={() => navigate('/swipe-project')}>
          <h2>Projects</h2>
          <p>Engage in hands-on projects to apply your knowledge.</p>
        </button>

        <button className="card" onClick={() => navigate('/assessment')}>
          <h2>Skill Assessments</h2>
          <p>Test your knowledge and get certified in your expertise.</p>
        </button>
      </div>
    </div>
  );
}

export default Discover;
