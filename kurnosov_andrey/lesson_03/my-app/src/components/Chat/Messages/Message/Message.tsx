import React from 'react';

export class MessageData {

    constructor(
        public text: string,
        public author: string) {

    }

    public get isFromUser(): boolean {
        return this.author === MessageData.userName;
    }

    private static readonly botName = 'Голливуд';
    private static readonly userName = 'Вы';
    public static fromUser(message: string) {
        return new MessageData(message, this.userName);
    }

    public static answerFromBot() {
        return new MessageData('Не пишите нам, мы сами вам напишем!', this.botName);
    }
}

type Props = {
    message: MessageData
};

const Message = ({ message }: Props) => {
    const text = message.text.replace(/\n\r?/g, '<br />');
    return (
        <div className={"message-container" + (message.isFromUser ? " message-container-user" : "") }>
            <div className="message">
                <div className="author">{message.author}: </div>
                <div dangerouslySetInnerHTML={{__html: text}}></div>
            </div>
        </div>);
};

export { Message };