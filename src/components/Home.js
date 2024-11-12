// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <div style={{ backgroundColor: "var(--primary-yellow)", padding: "20px" }}>
      <h1>Discover Top Freelancers</h1>
      <p>Connect with talented freelancers from around the world.</p>
      <div className="categories">
        <div className="category">Web Development</div>
        <div className="category">Graphic Design</div>
        <div className="category">Marketing</div>
      </div>
      {/* Recommended Freelancers Section */}
      <div className="recommended-freelancers">
        <h2>Recommended Freelancers</h2>
        {/* Card Components for Freelancers */}
      </div>
    </div>
  );
}

export default Home;
