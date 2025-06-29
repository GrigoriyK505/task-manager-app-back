import createHttpError from "http-errors";
import { getTaskById, getTasks } from "../services/tasks";
import { parsePaginationParams } from "../utils/parsePaginationParams";
import { parseFilterParams } from "../utils/parseFilterParams";

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
}

export const getTasksByIdController = async(req, res) => {
    const {taskId} = req.params;
    const data = await getTaskById(taskId);

    if(!data) {
        throw createHttpError(404, "Contact not found");
    }

    res.json({
        status:200,
        message: "Successfuly found contact with id {taskId}",
        data,
    });
};