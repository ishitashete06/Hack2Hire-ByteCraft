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
        <button className="category-card" onClick={() => navigate('/discover')}>Web Development</button>
        <div className="category-card">Graphic Design</div>
        <div className="category-card">Marketing</div>
      </div>
      <h2>Recommended Freelancers</h2>
      <div className="freelancers">
        <div className="freelancer-card">Freelancer 1</div>
        <div className="freelancer-card">Freelancer 2</div>
      </div>
    </div>
  );
}

export default Home;
