type CreateMessageProps = {
    onSend: (message: string) => void;
}

type Message = {
    text: string;
    data: Date;
}
