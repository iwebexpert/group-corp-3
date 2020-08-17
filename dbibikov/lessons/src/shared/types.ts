export interface SimpleTask {
    body: string;
    isCompleted: boolean;
}

export interface TaskGeneratorProps {
    onCreateTask?: (task:SimpleTask) => void;
}
export interface TaskGeneratorState {
    taskBody: string;
}

export interface TodoListState {
    tasks: SimpleTask[];
}

export interface TaskListProps extends TodoListState {
    onChangeTaskList?: (tasks: SimpleTask[]) => void;
}