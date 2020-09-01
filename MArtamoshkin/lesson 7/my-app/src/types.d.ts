type CreateMessageProps = {
    onSend: (message: string) => void;
}

type Message = {
    text: string;
    date: Date | string;
    author: number;
}

type Author = {
    id: number;
    avatar: string;
    name: string;
}

type MessagesListProps = {
    messages: Message[];
    contactPerson: User;
}

type User = {
    id: number;
    avatar: string;
    name: string
}

type MessageItemProps = {
    message: Message;
    contactPerson: User;
}

type Chat = {
    id: number;
    text: string;
    author: Author;
    messages: Message[];
    date: Date;
}

type ChatProps = {
    activeChatId: number;
}

type ChatListProps = {
    activeChatId: number | null;
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

type ChatParams = {
    id: string;
}
