export interface TaskListProps {
    items: TaskItem[];
    handlerOnChange?: (tasks: TaskItem[]) => void;
};

export interface TaskItem {
    text: string;
    isDone: boolean;
};

export interface ToDoListState{
    items: TaskItem[];
};

export interface TaskFormProps {
    handlerOnCreate: (task: TaskItem) => void;
};

export interface TaskFormState {
    text: string;
};