// src/pages/SwipeProject.js
import React from 'react';
import '../styles/SwipeProject.css';

function SwipeProject() {
  return (
    <div className="swipe-project">
      <h1>Swipe to Match with Projects</h1>
      <h3>Swipe left for rejecting and right for viewing more project details</h3>
      <div className="project-card">Project A</div>
    </div>
  );
}

export default SwipeProject;
