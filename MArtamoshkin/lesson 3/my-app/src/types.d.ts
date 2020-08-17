type Task = {
    id: number;
    title: string;
    done: boolean;
}

type TodoItemProps = {
    onCompleteToggle: (id: number) => void;
    onDelete: (id: number) => void;
    item: Task;
}

type TodoListProps = {
    items: Task[];
    onCompleteToggle: (id: number) => void;
    onDelete: (id: number) => void
}

type TodoCreateProps = {
    onSubmit: (text: string) => void;
}

type TodoCreateState = {
    value: string;
}

type TodoState = {
    items: Task[];
    showCompletedList: boolean;
  }