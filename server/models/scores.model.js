import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student'], // Only 'student' role allowed
        required: true
    },
    skillAssessment: {
        type: String,
        enum: ['SQL Basics', 'Java & OOPs', 'Data Structures & Algorithms (DSA)', 'Frontend Development'], 
        required: true
    },
    timeTaken: {
        type: Number, // Time taken in minutes
        required: true
    },
    dateOfTest: {
        type: Date,
        default: Date.now,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const Score = mongoose.model("Score", scoreSchema);
