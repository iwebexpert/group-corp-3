type ConfigApp = {
    lang: string;
    themeColor: string;
};

type MessageProps = {
    text: string;
    author?: string;
};

type MessageState = {
    num: number;
};

type MessagesListProps = {
    items: string[];
};

type MessageFormProps = {
    handlerOnSend: (MessageFormState) => void;
};

type MessageFormState = {
    author: string;
    text: string;
};

type MessengerState = {
    items: string[];
};