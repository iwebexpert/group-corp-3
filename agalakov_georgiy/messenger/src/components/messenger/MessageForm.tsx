import React, { useState } from 'react';
import './Messenger.css';
import { MessageFormEntity } from './entities';

type MessageFormProps = {
    addMessage: (messageForm: MessageFormEntity) => void
}

const defaultFormState: MessageFormEntity = {
    body: '',
    author: 'user'
}

const MessageForm: React.FC<MessageFormProps> = ({addMessage}) => {
    const [form, setForm] = useState<MessageFormEntity>(defaultFormState);
    const [showValidationMessage, setShowValidationMessage] = useState<boolean>(false);


    const changeBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({...form, body: event.target.value})
    }

    const changeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, author: event.target.value})
    }

    const sendFormState = () => {
        if (form.body && form.author) {
            addMessage(form)
            setForm({...defaultFormState, author: form.author});
            setShowValidationMessage(false);
        } else {
            setShowValidationMessage(true);
        }
    }

    return (
        <div className="message-form">
            <form onSubmit={(e) => {e.preventDefault()}} className="message-form-container">
                <div>
                    <p>Message</p>
                    <textarea rows={4} value={form.body} onChange={changeBody}/>
                </div>

                <div>
                    <p>Author</p>
                    <input value={form.author} onChange={changeAuthor}/>
                </div>

                <div className="submit-button-container">
                    <button type="submit" onClick={sendFormState}>send</button>
                </div>

            </form>

            <div>
                {showValidationMessage && <h3 className="warning-message">fill in all fields</h3>}
            </div>
            
        </div>
    )
}

export default MessageForm;