import { Score } from "../models/scores.model.js";
export const addScore = async (req, res) => {
    try {
        const { name, role, skillAssessment, timeTaken, score } = req.body;

        if (!name || !role || !skillAssessment || !timeTaken || score === undefined) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        if (role !== "student") {
            return res.status(400).json({
                message: "Only students can have scores.",
                success: false
            });
        }

        const newScore = await Score.create({
            name,
            role,
            skillAssessment,
            timeTaken,
            score,
            dateOfTest: new Date()
        });

        return res.status(201).json({
            message: "Score added successfully.",
            success: true,
            score: newScore
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

export const getScores = async (req, res) => {
    debugger
    try {
        const scores = await Score.find().sort({ dateOfTest: -1 });

        return res.status(200).json({
            message: "Scores fetched successfully.",
            success: true,
            scores
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

export const getScoreById = async (req, res) => {
    try {
        const { id } = req.params;

        const score = await Score.findById(id);
        if (!score) {
            return res.status(404).json({
                message: "Score not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Score fetched successfully.",
            success: true,
            score
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

export const updateScore = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, skillAssessment, timeTaken, score } = req.body;

        const scoreToUpdate = await Score.findById(id);
        if (!scoreToUpdate) {
            return res.status(404).json({
                message: "Score not found.",
                success: false
            });
        }

        if (name) scoreToUpdate.name = name;
        if (skillAssessment) scoreToUpdate.skillAssessment = skillAssessment;
        if (timeTaken) scoreToUpdate.timeTaken = timeTaken;
        if (score !== undefined) scoreToUpdate.score = score;

        await scoreToUpdate.save();

        return res.status(200).json({
            message: "Score updated successfully.",
            success: true,
            score: scoreToUpdate
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

export const deleteScore = async (req, res) => {
    try {
        const { id } = req.params;

        const score = await Score.findByIdAndDelete(id);
        if (!score) {
            return res.status(404).json({
                message: "Score not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Score deleted successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};
