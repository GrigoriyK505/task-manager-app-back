import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper";
import { isValidId } from "../middlewares/isValidId";
import { getTasksByIdController, getTasksController } from "../controllers/tasks";

const router = Router();

router.get('/tasks', ctrlWrapper(getTasksController));

router.get('/tasks/:taskId', isValidId, ctrlWrapper(getTasksByIdController));