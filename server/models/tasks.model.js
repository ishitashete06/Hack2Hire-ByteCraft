import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tasks: {
        todo: [{ type: String }],
        doing: [{ type: String }],
        done: [{ type: String }],
    },
});

const Task = mongoose.model('Task', TaskSchema);
export default Task; // ES module default export
