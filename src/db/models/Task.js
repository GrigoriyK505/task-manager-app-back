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
            enum: ['all', 'complete', 'active'],
            required: true,
            default: 'all',
        },
        completed: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const TaskCollection = model('tasks', taskSchema);