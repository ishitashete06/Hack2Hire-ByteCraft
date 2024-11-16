// src/pages/Discover.js
import React from 'react';
import '../styles/Discover.css';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaProjectDiagram, FaCertificate } from 'react-icons/fa';

function Discover() {
  const navigate = useNavigate();
  return (
    <div className="discover">
      <h1>Discover Courses, Projects, and Assessments</h1>
      <div className="cards-container">
        {/* Courses Card */}
        <button className="card" onClick={() => navigate('/skill-development')}>
          <FaBook className="icon" />
          <h2>Courses</h2>
          <p>Explore a variety of courses to enhance your skills.</p>
        </button>

        {/* Projects Card */}
        <button className="card" onClick={() => navigate('/swipe-project')}>
          <FaProjectDiagram className="icon" />
          <h2>Projects</h2>
          <p>Engage in hands-on projects to apply your knowledge.</p>
        </button>

        {/* Skill Assessments Card */}
        <button className="card" onClick={() => navigate('/assessment')}>
          <FaCertificate className="icon" />
          <h2>Skill Assessments</h2>
          <p>Test your knowledge and get certified in your expertise.</p>
        </button>
      </div>
    </div>
  );
}

export default Discover;
