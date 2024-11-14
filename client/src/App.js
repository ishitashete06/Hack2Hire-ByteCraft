// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Navbar from './components/shared/Navbar'
import TaskTracking from './pages/TaskTracking';
import SwipeProject from './pages/SwipeProject';
import Dashboard from './pages/Dashboard';
import SkillDevelopment from './pages/SkillDevelopment';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/task-tracking" element={<TaskTracking />} />
        <Route path="/swipe-project" element={<SwipeProject />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skill-development" element={<SkillDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;
