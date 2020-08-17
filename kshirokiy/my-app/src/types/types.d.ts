type ToDoListFormState = {
    name: string
};

type ToDoListFormProps = {
    handlerOnSend: (ToDoListFormState) => void;
}

type ToDoListProps = {
    tasks: ToDoListFormState[]
}
