// src/pages/SwipeProject.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import '../styles/SwipeProject.css';
import webdev from '../assets/webdev.jpg';
import graphicimg from '../assets/graqphicdesign.jpeg';
import mobiledev from '../assets/mobiledev.jpeg';
import seoimg from '../assets/SEO.jpeg';
import dsimg from '../assets/datascience.jpeg';
import videoedit from '../assets/videoediting.jpeg';

const projects = [
  {
    title: 'Web Development Project',
    description: 'We are looking for an experienced web developer to build a responsive e-commerce site with integrated payment solutions and a custom CMS.',
    techStack: 'React, Node.js, MongoDB',
    budget: '$1500 - $2000',
    duration: '3 months',
    recruiter: { name: 'John Smith', email: 'john.smith@example.com' },
    applicationLink: 'https://example.com/apply-webdev',
    imageUrl: webdev,
  },
  {
    title: 'Graphic Design Project',
    description: 'Need a creative designer to work on branding and graphic assets for our new app.',
    techStack: 'Adobe Photoshop, Illustrator',
    budget: '$800 - $1200',
    duration: '1 month',
    recruiter: { name: 'Jane Doe', email: 'jane.doe@example.com' },
    applicationLink: 'https://example.com/apply-graphicdesign',
    imageUrl: graphicimg,
  },
  {
    title: 'Mobile App Development',
    description: 'Seeking a skilled mobile app developer to create a cross-platform app for our service. Experience with Flutter or React Native is preferred.',
    techStack: 'Flutter, React Native',
    budget: '$2000 - $2500',
    duration: '4 months',
    recruiter: { name: 'Emily Turner', email: 'emily.turner@example.com' },
    applicationLink: 'https://example.com/apply-mobiledev',
    imageUrl: mobiledev,
  },
  {
    title: 'SEO and Digital Marketing',
    description: 'Looking for an SEO expert to optimize our website and drive organic traffic. Knowledge of Google Analytics and social media advertising is a plus.',
    techStack: 'Google Analytics, SEO tools',
    budget: '$1000 - $1500',
    duration: '2 months',
    recruiter: { name: 'Michael Brown', email: 'michael.brown@example.com' },
    applicationLink: 'https://example.com/apply-seo',
    imageUrl: seoimg,
  },
  {
    title: 'Data Science Project',
    description: 'Seeking a data scientist to analyze customer data and provide actionable insights for our sales and marketing team.',
    techStack: 'Python, R, Tableau',
    budget: '$3000 - $4000',
    duration: '5 months',
    recruiter: { name: 'Sarah Lee', email: 'sarah.lee@example.com' },
    applicationLink: 'https://example.com/apply-ds',
    imageUrl: dsimg,
  },
  {
    title: 'Video Editing for YouTube Channel',
    description: 'Looking for a creative video editor to produce high-quality videos for our YouTube channel. Experience with Adobe Premiere Pro or Final Cut Pro is preferred.',
    techStack: 'Adobe Premiere Pro, Final Cut Pro',
    budget: '$500 - $1000',
    duration: '1 month',
    recruiter: { name: 'Alex Johnson', email: 'alex.johnson@example.com' },
    applicationLink: 'https://example.com/apply-videoedit',
    imageUrl: videoedit,
  },
];

function SwipeProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [savedProjects, setSavedProjects] = useState([]);
  const navigate = useNavigate();

  const swipe = (direction) => {
    setSwipeDirection(direction);

    if (direction === 'swipe-right') {
      setSavedProjects((prev) => [...prev, projects[currentIndex]]);
    }

    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSwipeDirection(null);
    }, 500);
  };


  const handleExploreMore = () => {
    navigate('/skilldevelopment');
  };

  const handleSavedProjectsClick = () => {
    navigate('/saved-projects', { state: { savedProjects } });
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="swipe-container">
      <header className="swipe-header">
        <h1>Explore Projects</h1>
        <p>Your right-swiped projects will be available in your dashboard. Discover exciting opportunities below!</p>
        <FaBookmark className="saved-icon" onClick={handleSavedProjectsClick} />
      </header>
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
            <button onClick={() => swipe('swipe-right')} className="swipe-btn right">✔</button>
          </div>
        </div>
      ) : (
        <div className="end-card">
          <h2>No more projects to explore?</h2>
          <p>Time to level up your skills! Click the button below to dive in and discover more opportunities!</p>
          <button className="explore-btn" onClick={() => navigate('/skilldevelopment')}>Explore Skills</button>
        </div>
      )}
    </div>
  );
}

export default SwipeProject;
