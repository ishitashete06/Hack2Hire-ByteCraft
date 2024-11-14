// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Discover Top Projects</h1>
      <div className="categories">
        <button className="category-card" onClick={() => navigate('/swipe-project')}>Web Development</button>
        <button className="category-card">Graphic Design</button>
        <button className="category-card">Marketing</button>
      </div>
      <h2>Recommended Courses</h2>
      <div className="courses">
        <button className="courses-card">Freelancer 1</button>
        <button className="courses-card">Freelancer 2</button>
      </div>
    </div>
  );
}

export default Home;
