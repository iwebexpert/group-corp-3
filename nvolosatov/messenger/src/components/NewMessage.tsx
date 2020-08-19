import React, { useState } from "react";

type NewMessage = {
  text: string;
  author: string;
};

const emptyMessage: NewMessage = {
  author: "",
  text: "",
};

export function NewMessage(props: NewMessageProps) {
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

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
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
        author: newMess.author
    });
    setBtnDisabled(true);
  };

  return (
    <div className="form">
      <div className="form__item">
        <label className="form__label_required" htmlFor="author">
          Автор
        </label>
        <input
          className="form__input"
          id="author"
          onChange={onChange}
          value={message.author}
          placeholder="Имя"
          required
        />
      </div>
      <div className="form__item">
        <label className="form__label_required" htmlFor="text">
          Сообщение
        </label>
        <textarea
          value={message.text}
          onChange={onChange}
          className="form__input"
          id="text"
          required
          placeholder="Напиши что-нибудь"
        />
      </div>
      <button className="form__button" onClick={onClick} disabled={btnDisabled}>
        Создать
      </button>
    </div>
  );
}
