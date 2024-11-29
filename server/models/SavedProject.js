import mongoose from "mongoose";

const savedProjectSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },  // Change projectId to jobId
    // Companydet: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
    savedAt: { type: Date, default: Date.now },
});

export default mongoose.model("SavedProject", savedProjectSchema);
