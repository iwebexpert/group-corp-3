import {MessageProps, MessageWithId} from "../../../../../../4_lesson/lesson4/lesson4/my-app/src/components/Message";

export type ToDoListFormState = {
    name: string;
};

export type ToDoListFormProps = {
    handlerOnSend: (ToDoListFormState) => void;
}

export type ToDoListProps = {
    tasks: ToDoListFormState[];
}

export type Item = {
    message: string,
    author: string
}

export type ItemFormProps = {
    onSendHandler: (data: ItemFormState) => void,
};

export type ItemWithId = {
    id: string,
    message: string,
    author: string,
    chatId?: number,
};

export type ItemFormState = {
    text: string,
    author: string,
};

type MessagesProps = {
    items: ItemWithId[],
};

type Chat = {
    id: number,
    title: string,
    messages: ItemWithId[]
}

export type ConfigApp = {
    lang: string | null,
    theme: string | null,
    author: string,
    Chats: Chat[],
    st: any
};

export type ChatsData = {
    id: number,
    title: string,
    messages: ItemWithId[]
};
