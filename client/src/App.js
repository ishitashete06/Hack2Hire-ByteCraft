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
import SavedProjects from './pages/SavedProjects';
import Assessment from './pages/Assessment';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import './styles/App.css';

// Add these routes inside <Routes>:


function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/task-tracking" element={<TaskTracking />} />
          <Route path="/swipe-project" element={<SwipeProject />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route path="/about" element={<About />} />
          <Route path="/saved-projects" element={<SavedProjects />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
