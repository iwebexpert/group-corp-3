export interface MessageFormEntity {
    body: string;
    author: string;
}

export interface MessageEntity extends MessageFormEntity {
    id: number;
    bot?: boolean;
}