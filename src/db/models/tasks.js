import { Schema } from "mongoose";

const tasksSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const TasksCollection = model('tasks', tasksSchema)