import {TaskCollection} from "../db/models/Task.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getTasks = async ({
  page = 1,
  perPage = 10,
  completed,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const filter = {};

  if (completed === 'true') {
    filter.completed = true;
  } else if (completed === 'false') {
    filter.completed = false;
  }

  const tasksQuery = TaskCollection.find(filter);

  const [tasksCount, tasks] = await Promise.all([
    TaskCollection.countDocuments(filter),
    tasksQuery.skip(skip).limit(limit).exec(),
  ]);

  const paginationData = calculatePaginationData(tasksCount, perPage, page);

  return {
    data: tasks,
    ...paginationData,
  };
};


export const getTaskById = taskId => TaskCollection.findOne({_id: taskId});

export const createTask = async (payload) => {
    const task = await TaskCollection.create(payload);
    return task;
};

export const deleteTask = async (taskId) => {
    const task = await TaskCollection.findOneAndDelete({_id: taskId});
    return task;
};

export const updateTask = async (taskId, payload, options = {}) => {
    const task = await TaskCollection.findOneAndUpdate(
        {_id: taskId},
        payload,
        {
            new: true,
            ...options
        },
    );
    return task;
};