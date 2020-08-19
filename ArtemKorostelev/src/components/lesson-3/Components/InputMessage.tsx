import React from "react";

const InputMessage = ({onSend}: {onSend: (text: string) => void}) => {
    const [text, setText] = React.useState('');
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSend(text);
        setText('');
    }
    return (
        <form onSubmit={submitHandler}>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button type="submit" disabled={!text}>
                Send
            </button>
        </form>
    );
}

export default InputMessage;
