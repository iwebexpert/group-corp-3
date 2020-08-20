import React , {  useState } from "react";
import { Textarea } from "../../../Common/Textarea";


type Props = {
    onSend: (text: string) => void; 
}

export function MessageForm(props: Props) {

    const [text, setText] = useState('');
    const clearText = () => setText('');

    const send = () => {
        if (text) {
            props.onSend(text);
            clearText();
        }
    }

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        send();
    }

    const onSendKeyPressHandler = (e: React.KeyboardEvent) => {
        if (e.ctrlKey && (e.keyCode === 11 || e.keyCode === 13 )) {
            send();
        }
    }

    const buttonDisabled = !text;

    const textarea = {
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>)  => setText(e.target.value || ''),
        value: text
    }
    return <form className="send-message-form" onSubmit={onSubmitHandler} onKeyUp={onSendKeyPressHandler}>
        <Textarea  {...textarea}/>
        <small> cntrl+enter для отправки </small> <button disabled={buttonDisabled}> Отправить </button>
    </form>
}