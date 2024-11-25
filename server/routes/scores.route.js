import express from "express";
import {addScore, getScores, getScoreById, updateScore, deleteScore} from "../controllers/scores.controller.js";

const router = express.Router();
router.route("/add").post(addScore);
router.route("/").get(getScores);
router.route("/:id").get(getScoreById);
router.route("/:id").put(updateScore);
router.route("/:id").delete(deleteScore);



export default router;
