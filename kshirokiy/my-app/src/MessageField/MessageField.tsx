import React from 'react';

export const MessageField: React.FC<any> = ({onSendHandler}) => {
    const [message, setMessage] = React.useState('');
    const [author, setAuthor] = React.useState('');

    const handleButtonClick2 = () => {
        if (message.trim() !== '' && author.trim() !== '') {
            onSendHandler({message, author});
            setAuthor('');
            setMessage('');
        }
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            handleButtonClick2();
        }
    }

    return (
        <>
            <div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Сообщение"
                           value={message}
                           onKeyDown={handleKeyDown}
                           onChange={e => setMessage(e.target.value)}/>

                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Автор"
                           value={author}
                           onKeyDown={handleKeyDown}
                           onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        handleButtonClick2();
                    }}>
                    Добавить сообщение
                </button>
            </div>
        </>
    );
}
