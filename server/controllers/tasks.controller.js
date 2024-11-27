import Task from '../models/tasks.model.js';

// Get tasks for a user
export const getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.findOne({ userId: req.params.userId });
        res.json(tasks || { tasks: { todo: [], doing: [], done: [] } });
    } catch (err) {
        res.status(500).json({ error: "Error fetching tasks: " + err.message });
    }
};

// Update tasks for a user
export const updateUserTasks = async (req, res) => {
    const { tasks } = req.body;
    try {
        const updatedTasks = await Task.findOneAndUpdate(
            { userId: req.params.userId },
            { tasks },
            { new: true, upsert: true }
        );
        res.json(updatedTasks);
    } catch (err) {
        res.status(500).json({ error: "Error updating tasks: " + err.message });
    }
};
