// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Discover Top Freelancers</h1>
      <div className="categories">
        <div className="category-card">Web Development</div>
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
