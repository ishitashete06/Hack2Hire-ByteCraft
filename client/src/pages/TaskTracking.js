// src/pages/TaskTracking.js
import React, { useState } from 'react';
import '../styles/TaskTracking.css';

function TaskTracking() {
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: [],
  });

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => ({
        ...prev,
        todo: [...prev.todo, newTask],
      }));
      setNewTask("");
    }
  };

  const onDragStart = (e, task, from) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("from", from);
  };

  const onDrop = (e, to) => {
    const task = e.dataTransfer.getData("task");
    const from = e.dataTransfer.getData("from");

    if (task && from !== to) {
      setTasks((prev) => ({
        ...prev,
        [from]: prev[from].filter((t) => t !== task),
        [to]: [...prev[to], task],
      }));
    }
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div className="task-tracking">
      <header className="task-header">
        <h1>Task Tracking</h1>
        <p>Keep your projects organized by tracking tasks with ease.</p>
      </header>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-columns">
        {["todo", "doing", "done"].map((column) => (
          <div
            key={column}
            className={`task-column ${column}`}
            onDragOver={allowDrop}
            onDrop={(e) => onDrop(e, column)}
          >
            <h2>{column.toUpperCase()}</h2>
            <div className="task-items">
              {tasks[column].map((task, index) => (
                <div
                  key={index}
                  className="task-item"
                  draggable
                  onDragStart={(e) => onDragStart(e, task, column)}
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskTracking;
