import Joi from "joi";

export const createTaskSchema = Joi.object({
    title: Joi.string().max(30).required(),
    description: Joi.string().max(60),
    taskType: Joi.string().valid('all', 'complete', 'active'),
    completed: Joi.boolean()
});

export const updateTaskSchema = Joi.object({
    title: Joi.string().max(30),
    description: Joi.string().max(60),
    taskType: Joi.string().valid('all', 'complete', 'active'),
    completed: Joi.boolean()
});