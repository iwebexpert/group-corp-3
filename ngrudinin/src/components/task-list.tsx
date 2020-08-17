import React, { FC } from "react"
import { TaskModel } from "../models/TaskModel"
import { TaskItem } from "./task-item";

export interface TaskListParams {
    onChangeStatusTask: (t: TaskModel) => void;
    onRemoveTask: ((task: TaskModel) => void);
    tasks: TaskModel[];
}

export const TaskList: FC<TaskListParams> = (params: TaskListParams) => {
    const { tasks } = params;
    const onRemoveTask = (task: TaskModel) => params.onRemoveTask(task);
    return <>
        {tasks.map(q => <TaskItem key={q.id}
            onChangeStatusTask={(t) => params.onChangeStatusTask(t)}
            task={q}
            onDeleteTask={(task) => onRemoveTask(task)}></TaskItem>)}
    </>
}