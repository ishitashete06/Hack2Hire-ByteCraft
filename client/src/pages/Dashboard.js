import React, { useState } from 'react';
import '../styles/Dashboard.css';
import bannerimg from '../assets/banner.jpeg';
import profileimg from '../assets/profile.jpeg';

function Dashboard() {
  const [description, setDescription] = useState('Full-stack developer passionate about building intuitive web apps.');
  const [skills, setSkills] = useState(['React', 'Node.js', 'MongoDB', 'CSS']);
  const [editingDescription, setEditingDescription] = useState(false);
  const [portfolioLinks, setPortfolioLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');
  const [updateImage, setUpdateImage] = useState(null);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill) => setSkills(skills.filter((s) => s !== skill));

  const addPortfolioLink = () => {
    if (newLink) {
      setPortfolioLinks([...portfolioLinks, newLink]);
      setNewLink('');
    }
  };

  const postUpdate = () => {
    if (newUpdate || updateImage) {
      setUpdates([...updates, { text: newUpdate, image: updateImage }]);
      setNewUpdate('');
      setUpdateImage(null);
    }
  };

  const handleImageUpload = (e) => {
    if (e.target.files.length) {
      setUpdateImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const redirectToTaskTracking = () => {
    window.location.href = '/task-tracking';
  };

  const redirectToSavedProjects = () => {
    window.location.href = '/saved-projects';
  };

  return (
    <div className="dashboard">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-banner">
          <img src={bannerimg} alt="Banner" className="banner-image" />
        </div>
        <div className="profile-details">
          <img src={profileimg} alt="Profile" className="profile-picture" />
          <div className="profile-content">
            <h2>John Doe</h2>
            <p>Email: john.doe@example.com</p>
            <p>Contact: 123-456-7890</p>
            <div>
              {!editingDescription ? (
                <>
                  <p>About: {description}</p>
                  <button onClick={() => setEditingDescription(true)} className="edit-btn">Edit</button>
                </>
              ) : (
                <>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="edit-description"
                  ></textarea>
                  <div className="description-buttons">
                    <button onClick={() => setEditingDescription(false)} className="save-btn">Save</button>
                    <button onClick={() => setEditingDescription(false)} className="cancel-btn">Cancel</button>
                  </div>
                </>
              )}
            </div>
            <div className="skills-section">
              <h3>Skills</h3>
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="remove-skill-btn">x</button>
                </span>
              ))}
              <div className="add-skill-section">
                <input
                  type="text"
                  placeholder="Add skill..."
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <button onClick={addSkill} className="add-btn">Add Skill</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Below Profile: Two-Column Layout */}
      <div className="below-profile">
        {/* Left Column */}
        <div className="left-column">
          <div className="buttons-card">
            <button onClick={redirectToTaskTracking} className="task-btn">Task Tracking</button>
            <button onClick={redirectToSavedProjects} className="saved-btn">Saved Projects</button>
          </div>
          <div className="portfolio-card">
            <h3>Portfolio</h3>
            <ul>
              {portfolioLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add portfolio link..."
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
            />
            <button onClick={addPortfolioLink} className="add-btn">Add</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="updates-card">
            <h3>Share Your Updates</h3>
            <textarea
              placeholder="What's on your mind?"
              value={newUpdate}
              onChange={(e) => setNewUpdate(e.target.value)}
            ></textarea>
            <label className="file-label">
              Choose File
              <input type="file" onChange={handleImageUpload} className="file-input" />
            </label>
            <button onClick={postUpdate} className="post-btn">Post</button>
            <ul>
              {updates.map((update, index) => (
                <li key={index} className="update-item">
                  <p>{update.text}</p>
                  {update.image && <img src={update.image} alt="Update" className="update-image" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
