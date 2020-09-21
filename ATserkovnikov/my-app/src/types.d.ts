type TaskData = {
    taskId: string;
    isReady: boolean;
    title: string;
}

type TasksBlockState = {
    tasks: TaskData[];
}

type TaskItemsProps = {
    tasks: TaskData[];
    deleteHandler: any;
}

type TaskItemProps = {
    taskItem: TaskData
    deleteHandler: any;
}

type TaskFormProps = {
    taskText: string;
    addHandler: any;
}

type TaskFormState = {
    taskText: string;
}

type MessageFormProps = {
    messageFormData: MessageData;
    addMessageHandler: (data: MessageData) => void;
    checkCondition: boolean;
}

type MessageData = {
    chatId: number;
    id: string
    author: string;
    messageText: string;
    read: boolean;
}

type MessageProps = {
    messages: MessageData[];
}

type MessagesListProps = {
    messages: MessageData[];
    chatId: number;
    updateChatDB: (messagesAdd: MessageData) => void;
}

type Chat = {
    id: number;
    title: string,
    description: string;
    messages: MessageData[];
}

type ChatAdd = {
    id: number;
    name: string;
}


