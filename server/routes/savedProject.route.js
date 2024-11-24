import express from "express";
import { saveProject, getSavedProjects } from "../controllers/savedProject.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Save a project
router.post("/save", isAuthenticated, saveProject);

// Get saved projects
router.get("/", isAuthenticated, getSavedProjects);

export default router;
