
class ChatsService {
    
    public getChatsList(): Chat[] {
        return [
            {
                "id": 1,
                "name": "Чат 1",
                "messages": [
                    {
                        "id": 1,
                        "chatId": 1,
                        "text": "Привет!",
                        "author": "Неизвестно",
                        "isFromUser": false
                    },
                    {
                        "id": 2,
                        "chatId": 1,
                        "text": "Что ты здесь делаешь!",
                        "author": "Неизвестно",
                        "isFromUser": false
                    }
                ]
            },
            {
                "id": 2,
                "name": "Чат 2",
                "messages": [
                    {
                        "id": 3,
                        "chatId": 2,
                        "text": "?????",
                        "author": "?????",
                        "isFromUser": false
                    }
                ]
            },
            {
                "id": 3,
                "name": "Чат 3",
                "messages": []
            }
        ].map(m => ({...m, unreadMessages: [], answerStatus: AnswerStatus.None}))
    }
}


export type Chat = {
    id: number;
    name: string;
    messages: Message[];
    answerStatus: AnswerStatus;
    unreadMessages: Message[];
}

export type Message = {
    id: number,
    chatId?: number,
    text: string,
    author: string,
    isFromUser: boolean,
}

export enum AnswerStatus {
    Typing,
    None
}

export const chatsService = new ChatsService();
