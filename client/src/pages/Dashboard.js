import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard() {
  const [bio, setBio] = useState("Welcome to my profile!");
  const [status, setStatus] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [portfolioInput, setPortfolioInput] = useState("");

  const navigate = useNavigate();

  const handleAddBio = () => {
    const newBio = prompt("Enter your new bio:");
    if (newBio) setBio(newBio);
  };

  const handlePostStatus = () => {
    if (status.trim()) {
      setPortfolio([...portfolio, status]);
      setStatus("");
    }
  };

  const handleAddPortfolioItem = () => {
    if (portfolioInput.trim()) {
      setPortfolio([...portfolio, portfolioInput]);
      setPortfolioInput("");
    }
  };

  return (
    <div className="dashboard">
      <div className="profile-section">
        <div className="profile-info">
          <h1>Freelancer Dashboard</h1>
          <p>{bio}</p>
          <button className="btn" onClick={handleAddBio}>
            Edit Bio
          </button>
        </div>
      </div>

      <nav className="tab-menu">
        <button className="btn" onClick={() => navigate('/task-tracking')}>
          My Tasks
        </button>
        <button className="btn">My Portfolio</button>
        <button className="btn">My Projects</button>
      </nav>

      <div className="content">
        {/* Portfolio Section */}
        <div className="card portfolio">
          <h3>Portfolio</h3>
          <div className="portfolio-input">
            <input
              type="text"
              value={portfolioInput}
              onChange={(e) => setPortfolioInput(e.target.value)}
              placeholder="Enter a URL for your portfolio"
            />
            <button className="btn" onClick={handleAddPortfolioItem}>
              Add
            </button>
          </div>
          <ul className="portfolio-list">
            {portfolio.map((item, index) => (
              <li key={index}>
                <a href={item} target="_blank" rel="noopener noreferrer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Feed Section */}
        <div className="card project-feed">
          <h3>Project Feed</h3>
          {portfolio.length > 0 ? (
            portfolio.map((project, index) => (
              <div key={index} className="project-post">
                <p>{project}</p>
              </div>
            ))
          ) : (
            <p>No projects added yet.</p>
          )}
        </div>

        {/* Post Status Section */}
        <div className="card project-status">
          <h3>Post a Status</h3>
          <textarea
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="What project are you working on?"
          ></textarea>
          <button className="btn" onClick={handlePostStatus}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
