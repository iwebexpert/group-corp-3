type Lesson2State = {
    tasks: TaskItemProps[];
}

type AddTaskFormProps = {
    addItem: (text: string) => void;
}

type TodoProps = {
    tasks: TaskItemProps[];
}

type TaskItemProps = {
    id: string;
    text: string;
    checked: boolean;
    removeTask: (id: string) => void
    switchTaskState: (id: string, state: boolean) => void
}
