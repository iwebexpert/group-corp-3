type CreateMessageProps = {
    onSend: (message: string) => void;
};

type Message = {
    text: string;
    date: Date | string;
    author: number;
};

type Author = {
    id: Brand<number>;
    avatar: string;
    name: string;
};

type MessagesListProps = {
    messages: Message[];
    contactPerson: User;
};

type User = {
    id: Brand<number>;
    avatar: string;
    name: string;
};

type MessageItemProps = {
    message: Message;
    contactPerson: User;
};

type Chat = {
    id: number;
    author: Author;
    messages: Message[];
    isFired: boolean;
    hasResponse?: boolean;
    isTyping?: boolean;
    responseStep: number;
};

type ChatProps = {
    activeChatId: number;
};

type ChatListProps = {
    activeChatId: number | null;
};

type Settings = {
    language: string;
    theme: string;
    name: string;
};

enum Theme {
    Light = 'light',
    Dark = 'dark'
};

enum language {
    Russian = 'ru',
    English = 'en'
};

type ChatParams = {
    id: Brand<string>;
};

type ChatsContainerProps = {
    chatId: number | null;
};