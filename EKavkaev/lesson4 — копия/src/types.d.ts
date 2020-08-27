type MessageProps = {
    item: Message
};

type MessagesListProps = {
    items: Message[];
    sendMessage: (item:Message) => void;
};

type Message = {
    text: string;
    author?: string;
};

type MessageFormProps = {
    sendMessage: (item:Message) => void;
};