import React, { useState } from "react";

const CreateMessage = (props: CreateMessageProps) => {
    const [message, setMessage] = useState('');
    const {onSend} = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSend(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group create-message">
                <input type="text" name="message" value={message} onChange={handleChange} className="form-control message-input"
                       placeholder="Введите сообщение"/>
                <div className="input-group-append">
                    <button className="btn btn-light border message-submit" type="submit" disabled={!message.trim().length}>Отправить</button>
                </div>
            </div>
        </form>
    );
};

export { CreateMessage };
