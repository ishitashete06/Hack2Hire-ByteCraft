// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import SwipeProjectPage from './pages/SwipeProjectPage';
import TaskTrackingPage from './pages/TaskTrackingPage';
import DashboardPage from './pages/DashboardPage';
import SkillDevelopmentPage from './pages/SkillDevelopmentPage';

import './client/src/assets/styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/discover" component={DiscoverPage} />
        <Route path="/swipe-project" component={SwipeProjectPage} />
        <Route path="/task-tracking" component={TaskTrackingPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/skill-development" component={SkillDevelopmentPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
