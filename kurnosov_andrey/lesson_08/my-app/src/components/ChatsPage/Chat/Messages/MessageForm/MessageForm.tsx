import React, { useContext, useEffect, useState } from "react";
import { Textarea } from "../../../../Common/Textarea";
import { Form, Button } from "react-bootstrap";
import { LangText } from "../../../../../Langs";
import { AuthContext } from "../../../../../Auth";


type Props = {
    onSend: (text: string, userName: string) => void;
}

export function MessageForm(props: Props) {

    const [text, setText] = useState<string>('');
    const [validated, setValidated] = useState<boolean>(false);
    const authCtx = useContext(AuthContext);

    let authUserName = authCtx.user?.name;
    if (!authUserName)
        authUserName = '';
    
    let [userName, setUserName] = useState<string>(authUserName); 
    useEffect(() => setUserName(authUserName),[authUserName]);
    

    const clearText = () => setText('');

    const send = () => {
        if (text) {
            setValidated(false);
            props.onSend(text, userName);
            clearText();
        } else {
            setValidated(true);
        }
    }

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        send();
    }

    const onSendKeyPressHandler = (e: React.KeyboardEvent) => {
        if (e.ctrlKey && (e.keyCode === 11 || e.keyCode === 13)) {
            send();
        }
    }

    const textarea = {
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value || ''),
        value: text,
        id: "inputGroupPrepend",
        required: true
    }
    return (
        <Form
            noValidate 
            validated={validated}
            onSubmit={onSubmitHandler} 
            onKeyUp={onSendKeyPressHandler} 
            className="mt-3"
        >
            <Form.Group>
                <Form.Label className="float-right"> 
                    <small className="text-muted"> 
                        <LangText text={{RU:'Сообщение', EN:'Message'}} />
                    </small>
                </Form.Label>
                <Textarea  {...textarea}/>

                <Form.Control.Feedback 
                    type="invalid" 
                    aria-describedby={textarea.id}
                >
                    <LangText text={{RU:'Пожалуйста, введите сообщение.', EN: 'Please, print message'}} />
                </Form.Control.Feedback>
            </Form.Group>
            {/* TODO:Вынести в отдельный компонент и использовать в настройках*/}
            <Form.Group>
                <Form.Label className="float-right"> 
                    <small className="text-muted"> 
                        <LangText text={{RU:'Имя пользователя', EN:'User name'}} />
                    </small>
                </Form.Label>
                <Form.Control 
                    disabled={!!authCtx.user?.name} 
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    minLength={3}
                    maxLength={30}  
                    pattern={"[a-zA-Zа-яА-ЯёЁ]+"}
                    required
                    id={"chat-username-input"}
                />
                <Form.Control.Feedback
                    type="invalid"
                    aria-describedby={"chat-username-input"}
                >
                    <LangText text={{
                        RU: 'Имя пользователя должно содержать от 3 до 30 букв',
                        EN: 'The user name must contain between 3 and 30 letters',
                    }} />
                </Form.Control.Feedback>
            </Form.Group>            
            <small className="text-muted">
                <span>cntrl+enter </span> 
                <LangText text={{RU:'для отправки',EN: 'for send'}} /> 
            </small>
            <Button type="submit" className="float-right"> 
                <LangText text={{RU: 'Отправить', EN: 'Send'}}/> 
            </Button>
        </Form>
    )
}