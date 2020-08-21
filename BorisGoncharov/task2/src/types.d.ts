type TodoListProps = {
    items: TodoItemProps[];
}

type TodoItemProps = {
    text: string;
    checked: boolean;
    id: string;
    closeItem: (id: string) => void;
    toggleItem: (id: string) => void;
}

type FormProps = {
    createItem: (text: string) => void;
    resetItems: () => void;
}

type AppState = {
    items: TodoItemProps[];
}