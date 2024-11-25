import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskTracking() {
    const [tasks, setTasks] = useState({ todo: [], doing: [], done: [] });
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks((prev) => ({...prev, todo: [...prev.todo, newTask],}));
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
        <div className="p-6 min-h-screen" style={{ backgroundColor: "#F7EFE5" }}>
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold" style={{ color: "#674188" }}>
                    Task Tracking
                </h1>
                <p className="text-lg" style={{ color: "#C8A1E0" }}>
                    Keep your projects organized by tracking tasks with ease.
                </p>
            </header>

            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="p-2 w-80 border rounded-l-lg focus:outline-none"
                    style={{
                        borderColor: "#E2BFD9",
                        backgroundColor: "#F7EFE5",
                        color: "#674188",
                    }}
                />
                <button
                    onClick={addTask}
                    className="p-2 rounded-r-lg hover:shadow-md"
                    style={{
                        backgroundColor: "#E2BFD9",
                        color: "#F7EFE5",
                        borderColor: "#E2BFD9",
                    }}
                >
                    Add Task
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["todo", "doing", "done"].map((column) => (
                    <div
                        key={column}
                        className="p-4 rounded-lg shadow-md"
                        style={{ backgroundColor: "#E2BFD9" }}
                        onDragOver={allowDrop}
                        onDrop={(e) => onDrop(e, column)}
                    >
                        <h2
                            className="text-xl font-semibold text-center mb-4"
                            style={{ color: "#F7EFE5", backgroundColor: "#674188" }}
                        >
                            {column.toUpperCase()}
                        </h2>
                        <div className="space-y-2">
                            {tasks[column].map((task, index) => (
                                <div
                                    key={index}
                                    className="p-3 border rounded-lg font-medium shadow-sm cursor-pointer hover:shadow-lg"
                                    style={{
                                        backgroundColor: "#F7EFE5",
                                        borderColor: "#674188",
                                        color: "#674188",
                                    }}
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
