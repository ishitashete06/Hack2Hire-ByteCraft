  import React from 'react';
  import '../styles/Dashboard.css';
  import userImage from '../assets/userimage.jpg';

  function Dashboard() {
    return (
      <div className="dashboard">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-banner">
            <img src="banner.jpg" alt="Profile Banner" />
          </div>
          <div className="profile-info">
            <img src={userImage} alt="User" className="profile-pic" />
            <div className="profile-details">
              <h2>Freelancer Profile</h2>
              <p>367 projects</p>
            </div>
            <div className="profile-buttons">
              <button className="connect-btn">Connect</button>
              <button className="chat-btn">Chat</button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tab-menu">
          <button>Tasks</button>
          <button>Profile</button>
          <button>Portfolio</button>
          <button>Certificates</button>
          <button>Community</button>
        </div>

        {/* Content Section */}
        <div className="content">
          {/* Skills Hub */}
          <div className="skills-hub">
            <button>Add Bio</button>
            <button>Edit Details</button>
            <button>Add Skills</button>
          </div>

          {/* Project Status Update */}
          <div className="project-status">
            <textarea placeholder="What project are you working on?"></textarea>
            <button>Post</button>
          </div>

          {/* Portfolio Section */}
          <div className="portfolio">
            <h3>Portfolio</h3>
            <div className="portfolio-item">
              <img src="portfolio1.jpg" alt="Portfolio item" />
            </div>
          </div>

          {/* Project Feed */}
          <div className="project-feed">
            <h3>Projects</h3>
            <div className="project-post">
              <p><strong>Freelancer</strong> is working on a project</p>
              <p>I’m currently working on an exciting project in web development. Check out some snapshots from my latest coding sessions and project milestones. Let’s build something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Dashboard;
