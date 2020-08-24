import React, { useState } from "react";
import "./NewMessageForm.scss";

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
      <div className="form-group">
        <label className="new-message-form__label" htmlFor="author">
          Автор
        </label>
        <input
          className="form-control form-control-sm"
          id="author"
          onChange={onChange}
          value={message.author}
          placeholder="Имя"
          required
        />
      </div>
      <div className="form-group">
        <label className="new-message-form__label" htmlFor="text">
          Сообщение
        </label>
        <textarea
          value={message.text}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="form-control form-control-sm"
          id="text"
          required
          placeholder="Напиши что-нибудь"
        />
      </div>
      <button
        className="btn btn-primary btn-sm btn-block"
        onClick={onClick}
        disabled={btnDisabled}
      >
        Создать
      </button>
    </div>
  );
}
