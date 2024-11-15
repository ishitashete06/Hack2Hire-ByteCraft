// src/pages/SwipeProject.js
import React, { useState } from 'react';
import '../styles/SwipeProject.css';

const projects = [
  {
    title: 'Web Development Project',
    description: 'We are looking for an experienced web developer to build a responsive e-commerce site with integrated payment solutions and a custom CMS.',
    budget: '$1500 - $2000',
    duration: '3 months',
    recruiter: {
      name: 'John Smith',
      email: 'john.smith@example.com',
    },
    imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
  },
  {
    title: 'Graphic Design Project',
    description: 'Need a creative designer to work on branding and graphic assets for our new app.',
    budget: '$800 - $1200',
    duration: '1 month',
    recruiter: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    },
    imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
  },
  // Add more projects as needed
];

function SwipeProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const swipe = (direction) => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSwipeDirection(null); // Reset the swipe animation
    }, 500); // Animation duration
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="swipe-container">
      {currentProject ? (
        <div className={`card ${swipeDirection}`}>
          <img src={currentProject.imageUrl} alt="Project" className="project-image" />
          <div className="card-content">
            <h2>{currentProject.title}</h2>
            <p>{currentProject.description}</p>
            <div className="details">
              <p><strong>Budget:</strong> {currentProject.budget}</p>
              <p><strong>Duration:</strong> {currentProject.duration}</p>
              <p><strong>Recruiter:</strong> {currentProject.recruiter.name}</p>
              <p><strong>Email:</strong> {currentProject.recruiter.email}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => swipe('swipe-left')} className="swipe-btn left">❌</button>
            <button onClick={() => swipe('swipe-right')} className="swipe-btn right">✅</button>
          </div>
        </div>
      ) : (
        <h2 className="no-more-projects">No more projects</h2>
      )}
    </div>
  );
}

export default SwipeProject;
