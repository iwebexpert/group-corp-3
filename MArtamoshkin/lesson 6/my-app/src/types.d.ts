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

type Chat = {
    id: number;
    text: string;
    author: Author;
    date: Date;
}

type Settings = {
    language: string;
    setLanguage: (value: string) => void;
    theme: string;
    setTheme: (value: string) => void;
    name: string;
    setName: (value: string) => void;
}

enum Theme {
    Light = 'light',
    Dark = 'dark'
}

enum language {
    Russian = 'ru',
    English = 'en'
}