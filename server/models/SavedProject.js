// models/SavedProject.js
import mongoose from "mongoose";

const savedProjectSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    savedAt: { type: Date, default: Date.now },
});

export default mongoose.model("SavedProject", savedProjectSchema);
