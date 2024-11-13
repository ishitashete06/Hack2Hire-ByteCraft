// src/pages/TaskTracking.js
import React from 'react';
import '../styles/TaskTracking.css';

function TaskTracking() {
  return (
    <div className="task-tracking">
      <h1>Task Tracking</h1>
      <div className="tasks">
        <div className="task-card">Project 1</div>
        <div className="task-card">Project 2</div>
      </div>
    </div>
  );
}

export default TaskTracking;
