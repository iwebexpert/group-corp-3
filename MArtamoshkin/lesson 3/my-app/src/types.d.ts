type CreateMessageProps = {
    onSend: (message: string) => void;
}

type Message = {
    text: string;
    date: Date;
    author: Author;
}

type Author = {
    id: number;
    avatar: string;
    name: string;
}

type MessagesListProps = {
    messages: Message[];
}

type User = {
    id: number;
    avatar: string;
    name: string
}

type MessageItemProps = {
    message: Message;
}