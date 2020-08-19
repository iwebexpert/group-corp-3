type ToDoListFormState = {
    name: string
};

type ToDoListFormProps = {
    handlerOnSend: (ToDoListFormState) => void;
}

type ToDoListProps = {
    tasks: ToDoListFormState[]
}

type Item = {
    message: string;
    author: string;
}
