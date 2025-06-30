import createHttpError from "http-errors";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../services/tasks.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";

export const getTasksController = async(req, res) => {
    const {page, perPage} = parsePaginationParams(req.query);
    const filter = parseFilterParams(req.query);

    const data = await getTasks({
        page,
        perPage,
        filter,
    });

    res.json({
        status: 200,
        message: "Successfully found tasks!",
        data,
    });
};

export const getTasksByIdController = async(req, res) => {
    const {taskId} = req.params;
    const data = await getTaskById(taskId);

    if(!data) {
        throw createHttpError(404, "Contact not found");
    }

    res.json({
        status:200,
        message: `Successfuly found contact with id ${taskId}`,
        data,
    });
};

export const createTaskController = async(req, res) => {
    const data = await createTask(req.body);

    res.status(201).json({
        status:201,
        message: "Successfully created a task!",
        data,
    });
};

export const deleteTaskController = async(req, res, next) => {
    const {taskId} = req.params;
    const data = await deleteTask(taskId);

    if(!data) {
        next(createHttpError(404, 'Task not found'));
        return;
    }
    res.json({
      status: 200,
      message: 'Transaction deleted successfully',
    });
};

export const updateTaskController = async (req, res, next) =>{
    const {taskId} = req.params;
    const data = await updateTask(taskId, req.body);

    if(!data) {
        next(createHttpError(404, "Task not found"));
        return;
    }

    res.json({
        status: 200,
        message: "Successfully updated a task!",
        data,
    });
};