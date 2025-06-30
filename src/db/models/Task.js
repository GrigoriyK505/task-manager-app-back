import { Schema, model } from "mongoose";

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        taskType: {
            type: String,
            enum: ['all', 'complete', 'incomplete'],
            required: true,
            default: 'all',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const TaskCollection = model('tasks', taskSchema)