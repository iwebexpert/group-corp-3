type MessageEntity = {
    text: string;
    author: string;
    created: Date;
    isAnswerphone?: boolean;
}

type MessageListProps = {
    messages: MessageEntity[];
}


type NewMessageProps = {
    createdMessage: (MessageEntity) => void;
}

type MessageProps = {
    message: MessageEntity;
    
}