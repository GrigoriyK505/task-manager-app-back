import { TasksCollection } from "../db/models/tasks"
import { calculatePaginationData } from "../utils/calculatePaginationData";

export const getTasks = async ({
    page = 1,
    perPage = 10,
    filter = {},
}) => {
    const limit = perPage;
    const skip = (page - 1) * perPage;

    const tasksQuery = TasksCollection.find();
    
    if(filter.taskType) {
        tasksQuery.where('taskType').regex(new RegExp(filter.taskType, 'i'));
    }

    const [tasksCount, tasks] = await Promise.all([
        TasksCollection.find({}).merge(tasksQuery).countDocuments(),
        tasksQuery
            .skip(skip)
            .limit(limit)
            .exec(),
    ]);

    const paginationData = calculatePaginationData(tasksCount, perPage, page);

    return {
        data: tasks, ...paginationData,
    };
};

export const getTaskById = async (taskId) => {
    const task = await TasksCollection.findById(taskId);
    return task;
};