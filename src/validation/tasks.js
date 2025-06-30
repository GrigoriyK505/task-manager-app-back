import Joi from "joi";

export const createTaskSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(60),
    taskType: Joi.string().valid('all', 'complete', 'incomplete')
});

export const updateTaskSchema = Joi.object({
    title: Joi.string().min(3).max(30),
    description: Joi.string().min(3).max(60),
    taskType: Joi.string().valid('all', 'complete', 'incomplete')
});