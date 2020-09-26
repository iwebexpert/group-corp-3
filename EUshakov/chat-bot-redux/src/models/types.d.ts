export type ChatsState = {
    chats: ChatState[];
}

export type ChatState = {
    id: number;
    title: string;
    messages: Message[];
}

export type Message = {
    id: number;
    text: string;
    author: string;
    timeStamp: Date;
}
