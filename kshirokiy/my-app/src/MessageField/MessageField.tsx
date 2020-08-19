import React, {useState, useEffect, useRef} from 'react';
import Messages from '../Messages/Messages';

type State = {
    messages: Item[];
};

type Props = {};

export const MessageField: React.FC<Props> = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const inputMessageRef = useRef<HTMLInputElement>(null);
    const inputAuthorRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: any) => {}

    const handleButtonClick2 = (inputRef: any, inputAuthorRef: any) => {
        let message = inputRef.current.value;
        let author = inputAuthorRef.current.value;
        inputRef.current.value = '';
        inputAuthorRef.current.value = '';
        if (message.trim() !== '' && author.trim() !== '') {
            setMessages(currentState => ([...currentState, {message, author}]));
        }
    }

    return (
        <>
            <Messages items={messages}></Messages>
            <div>
                <div>
                    <input type="text"
                           ref={inputMessageRef}
                           name="message"
                           placeholder="Введите сообщение"
                           onChange={handleInputChange}/>

                </div>
                <div>
                    <input type="text"
                           ref={inputAuthorRef}
                           name="message"
                           placeholder="Введите Автора сообщение"
                           onChange={handleInputChange}/>

                </div>
                <button onClick={() => {handleButtonClick2(inputMessageRef, inputAuthorRef); }}>
                    Добавить сообщение
                </button>
            </div>
        </>
    );
}
