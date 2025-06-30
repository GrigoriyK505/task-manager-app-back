import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { isValidId } from "../middlewares/isValidId.js";
import { createTaskController, deleteTaskController, getTasksByIdController, getTasksController, updateTaskController } from "../controllers/tasks.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createTaskSchema, updateTaskSchema } from "../validation/tasks.js";

const router = Router();

router.get('/tasks', ctrlWrapper(getTasksController));

router.get('/tasks/:taskId', isValidId, ctrlWrapper(getTasksByIdController));

router.post('/tasks', validateBody(createTaskSchema), ctrlWrapper(createTaskController));

router.delete('/tasks/:taskId', ctrlWrapper(deleteTaskController));

router.patch('/tasks/:taskId', validateBody(updateTaskSchema), ctrlWrapper(updateTaskController));

export default router;