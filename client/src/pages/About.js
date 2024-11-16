// src/pages/About.js
import React from 'react';
import '../styles/About.css';
import { FaHandshake, FaSearch, FaUsers, FaGraduationCap, FaLock } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About <span>FreelanceHub</span></h1>
        <p>Your gateway to seamless freelancing experiences.</p>
      </header>
      <section className="about-content">
        <div className="about-intro">
          <h3>Hack2Hire Hackathon Project</h3>
          <p>
            <strong>FreelanceHub</strong> is a platform created by <strong>Team Byte Craft</strong> to bridge the gap between freelancers and clients with a focus on innovation, trust, and efficiency. 
          </p>
        </div>
        <div className="features-section">
          <h2>Why Choose FreelanceHub?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaHandshake className="feature-icon" />
              <h3>Seamless Connections</h3>
              <p>Find the perfect freelancer or project with our Tinder-like matching mechanism.</p>
            </div>
            <div className="feature-card">
              <FaSearch className="feature-icon" />
              <h3>Personalized Recommendations</h3>
              <p>Enjoy Spotify-style personalization for tailored freelancer recommendations.</p>
            </div>
            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3>Team Collaboration</h3>
              <p>Collaborate effortlessly with built-in tools for communication and management.</p>
            </div>
            <div className="feature-card">
              <FaGraduationCap className="feature-icon" />
              <h3>Skill Validation</h3>
              <p>Verify freelancer skills with AI-powered proctored assessments.</p>
            </div>
            <div className="feature-card">
              <FaLock className="feature-icon" />
              <h3>Secure Payments</h3>
              <p>Experience transparency and security with blockchain-powered transactions.</p>
            </div>
          </div>
        </div>
        <div className="closing-note">
          <p>
            At <strong>FreelanceHub</strong>, we are committed to empowering freelancers and businesses alike. Join us and redefine the future of freelancing.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
