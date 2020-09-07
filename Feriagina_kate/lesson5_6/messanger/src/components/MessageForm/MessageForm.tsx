import React, { useState, useContext } from "react";
import { MessageEntity } from "../Message";
import './MessageForm.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {ConfigAppContext} from '../../App';

type NewMessage = {
  text: string;
  author: string;
};

const emptyMessage: NewMessage = {
  author: "",
  text: "",
};

export type MessageFormProps = {
    createdMessage: (data: MessageEntity) => void;
};

export function MessageForm(props: MessageFormProps) {
  const [message, setMessage] = useState<NewMessage>(emptyMessage);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const {setting} = useContext(ConfigAppContext);

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const changed = { [event.target.id]: event.target.value } as Pick<NewMessage, keyof NewMessage>;

    const newMessage = { ...message, ...changed };
    setMessage(newMessage);

    newMessage.author = !isAuthor() ? newMessage.author : setting.author

    const canPost = !(newMessage.author && newMessage.text);
    setBtnDisabled(canPost);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (btnDisabled) {
      return;
    }

    const newMess: MessageEntity = {
      text: message.text,
      author: message.author
    };
    props.createdMessage(newMess);

    setMessage({
        ...emptyMessage,
        author: newMess.author
    });
    setBtnDisabled(true);
  };

  const isAuthor = () => {
    return !(setting.author.trim() === '');
  }

  return (
    <div className="form">
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Username"
          id="author"
          onChange={onChange}
          value={!isAuthor() ? message.author : setting.author}
          readOnly={!isAuthor() ? false : true}
          placeholder="Nombre"
          required
        />
      </InputGroup>

      <InputGroup>        
        <FormControl as="textarea" 
          aria-label="Mensaje" 
          value={message.text}
          onChange={onChange}
          id="text"
          placeholder="Mensaje"
          required />
      </InputGroup>

      <Button className = "button" variant="outline-success" onClick={onClick} disabled={btnDisabled}>Enviar</Button>
    </div>
  );
}