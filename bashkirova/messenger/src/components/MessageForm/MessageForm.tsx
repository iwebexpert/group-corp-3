import React, {useState} from 'react';


type MessageFormProps = {
    onSendHandler: (data: MessageFormState) => void;
};

type MessageFormState = {
    text: string;
    author: string;
};

export const MessageForm: React.FC<MessageFormProps> = ({onSendHandler}) => {
    const [dataForm, setDataForm] = useState<MessageFormState>({author: '', text: ''});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newState = {...dataForm, [event.target.name]: event.target.value};
        setDataForm(newState);
    };

    const handleMessageSend = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onSendHandler(dataForm);
        setDataForm({...dataForm, text: ''});
    };

    return (<>
        <div>
            <input name="author" type="text" value={dataForm.author} onChange={handleInputChange}
                   placeholder="Введите имя"/>
        </div>
        <div>
            <textarea name="text" value={dataForm.text} onChange={handleInputChange} placeholder="Введите текст"/>
        </div>
        <div>
            <button onClick={handleMessageSend} disabled={!dataForm.text.length}>Отправить сообщение</button>
        </div>
    </>);
}