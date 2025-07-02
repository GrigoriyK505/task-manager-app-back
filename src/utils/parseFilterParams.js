const parseType = (taskType) => {
    const isString = typeof taskType === 'string';
    if(!isString) return;

    const isType = (taskType) => ['all', 'complete', 'active'].includes(taskType);

    if(isType(taskType)) return taskType;
};

export const parseFilterParams = (query) => {
    const {taskType} = query;

    const parsedTaskType = parseType(taskType);

    return {
        taskType: parsedTaskType,
    };
};