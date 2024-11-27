import express from 'express';
import { getUserTasks, updateUserTasks } from '../controllers/tasks.controller.js';
const router = express.Router();
router.get('/:userId', getUserTasks);
router.post('/:userId', updateUserTasks);
export default router;
