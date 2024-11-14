// src/pages/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h1>About FreelanceHub</h1>
      <h3>This is a project made for Hack2Hire Hackathon by Team Byte Craft</h3>
      <p>
        <strong>FreelanceHub</strong> is a freelancing platform designed to connect clients with top-tier freelancers. 
        Our platform aims to make freelancing easy, efficient, and secure with a range of innovative features:
      </p>
      
      <ul>
        <li>
          <strong>Tinder-like Matching Mechanism</strong>: Find the perfect freelancer or project by swiping through profiles, making the connection process quick and easy.
        </li>
        <li>
          <strong>Spotify-style Personalization</strong>: Get tailored freelancer recommendations based on your preferences and past interactions.
        </li>
        <li>
          <strong>Team Collaboration Tools</strong>: Collaborate seamlessly with your team and freelancers using built-in communication and project management features.
        </li>
        <li>
          <strong>AI-powered Proctored Skill Tests</strong>: Evaluate freelancer skills through AI-driven assessments that ensure expertise and accuracy.
        </li>
        <li>
          <strong>Blockchain-based Payment System</strong>: Enjoy secure, transparent transactions using our blockchain-powered payment infrastructure.
        </li>
      </ul>

      <p>
        At FreelanceHub, we are committed to providing a streamlined and trustworthy experience for both clients and freelancers. Join us today and take your freelancing career to the next level!
      </p>
    </div>
  );
}

export default About;