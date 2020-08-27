type MessageProps = {
    text: string,
}

type MessageState = {
    isDone: boolean
}

type MessagesListProps = {
    items: string[]
}

type TodoFormProps = {
    handlerOnAdd: (TodoFormState) => void;
}

type TodoFormState = {
    text: string;
}