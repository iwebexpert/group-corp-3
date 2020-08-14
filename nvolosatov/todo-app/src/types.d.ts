type TodoEntity = {
  title: string;
  comleted: boolean;
};

type TodoState = {
  todos: TodoEntity;
};

type NewTodoProps = {
    createdNewTodo: (todo: TodoEntity) => void;
}

type NewTodoState = {
    title: string;
    btnDisabled: boolean;
}

type TodoListProps = {
    todos: TodoEntity[];
    updatedTodo: (todo: TodoEntity, index: number) => void;
    removedTodo: (todo: TodoEntity, index: number) => void;
}

type TodoItemProps = {
    todo: TodoEntity;
    updatedTodo: (todo: TodoEntity) => void;
    removedTodo: () => void;
}

