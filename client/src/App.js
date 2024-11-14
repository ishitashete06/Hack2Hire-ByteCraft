// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import TaskTracking from './pages/TaskTracking';
import SwipeProject from './pages/SwipeProject';
import Navbar from './components/Navbar';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import SkillDevelopment from './pages/SkillDevelopment';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Place Navbar here so it persists across all pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/task-tracking" element={<TaskTracking />} />
          <Route path="/swipe-project" element={<SwipeProject />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
