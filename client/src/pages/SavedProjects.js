// src/pages/SavedProjects.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/SavedProjects.css';

function SavedProjects() {
  const location = useLocation();
  const { savedProjects } = location.state || { savedProjects: [] };

  return (
    <div className="saved-projects-container">
      <h1>Saved Projects</h1>
      {savedProjects.length > 0 ? (
        savedProjects.map((project, index) => (
          <div key={index} className="saved-project-card">
            <img src={project.imageUrl} alt="Project Thumbnail" className="project-thumbnail" />
            <div className="saved-project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
              <p><strong>Budget:</strong> {project.budget}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
              <p><strong>Recruiter:</strong> {project.recruiter.name}</p>
              <p><strong>Email:</strong> {project.recruiter.email}</p>
              <a href={project.applicationLink} className="apply-link" target="_blank" rel="noopener noreferrer">Apply Here</a>
            </div>
          </div>
        ))
      ) : (
        <p>No saved projects yet. Start swiping right on projects you like!</p>
      )}
    </div>
  );
}

export default SavedProjects;
