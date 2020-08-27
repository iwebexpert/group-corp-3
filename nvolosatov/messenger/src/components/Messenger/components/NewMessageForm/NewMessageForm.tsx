import React, { useState } from "react";
import "./NewMessageForm.scss";
import * as Bootstrap from "react-bootstrap";
import { generateId } from "../../../../utility";

type NewMessage = {
  text: string;
  author: string;
};

const emptyMessage: NewMessage = {
  author: "",
  text: "",
};

export function NewMessageForm(props: NewMessageProps) {
  const [message, setMessage] = useState<NewMessage>(emptyMessage);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const changed = { [event.target.id]: event.target.value } as Pick<
      NewMessage,
      keyof NewMessage
    >;

    const newMessage = { ...message, ...changed };
    setMessage(newMessage);

    const canPost = !(newMessage.author && newMessage.text);
    setBtnDisabled(canPost);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.ctrlKey && event.key === "Enter") {
      tryTocreateMessage();
    }
  };

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    tryTocreateMessage();
  };

  const tryTocreateMessage = (): void => {
    if (btnDisabled) {
      return;
    }
    const newMess: MessageEntity = {
      text: message.text,
      author: message.author,
      created: new Date(),
      id: generateId(),
      fromBot: false
    };
    props.createdMessage(newMess);

    setMessage({
      ...emptyMessage,
      author: newMess.author,
    });
    setBtnDisabled(true);
  };

  return (
    <div className="new-message-form">
      <Bootstrap.Form>
        <Bootstrap.FormGroup>
          <Bootstrap.FormLabel
            htmlFor="author"
            aria-required="true"
            className="new-message-form__label"
          >
            Автор
          </Bootstrap.FormLabel>
          <Bootstrap.FormControl
            id="author"
            size={"sm"}
            onChange={onChange}
            value={message.author}
            placeholder="Имя"
            required={true}
          ></Bootstrap.FormControl>
        </Bootstrap.FormGroup>
        <Bootstrap.FormGroup>
          <Bootstrap.FormLabel
            htmlFor="text"
            aria-required="true"
            className="new-message-form__label"
          >
            Сообщение
          </Bootstrap.FormLabel>
          <Bootstrap.FormControl
            as="textarea"
            id="text"
            size={"sm"}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={message.text}
            placeholder="Напиши что-нибудь"
            required={true}
          ></Bootstrap.FormControl>
        </Bootstrap.FormGroup>
        <Bootstrap.Button
          block={true}
          variant={"primary"}
          onClick={onClick}
          disabled={btnDisabled}
        >
          Создать
        </Bootstrap.Button>
      </Bootstrap.Form>
    </div>
  );
}
