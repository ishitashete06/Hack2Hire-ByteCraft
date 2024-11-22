// controllers/savedProject.controller.js
import SavedProject from "../models/SavedProject.js";

export const saveProject = async (req, res) => {
    try {
        const { projectId } = req.body;
        const userId = req.user._id; // Retrieved via `isAuthenticated` middleware

        const existing = await SavedProject.findOne({ userId, projectId });
        if (existing) return res.status(400).json({ success: false, message: "Project already saved" });

        const savedProject = new SavedProject({ userId, projectId });
        await savedProject.save();

        res.status(201).json({ success: true, message: "Project saved successfully", savedProject });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getSavedProjects = async (req, res) => {
    try {
        const userId = req.user._id;
        const savedProjects = await SavedProject.find({ userId }).populate("projectId");

        res.status(200).json({ success: true, savedProjects });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
