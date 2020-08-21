import React, { FC, useState } from 'react';
import './MessageForm.scss';
type MessageFormProps = {
  onSendHandler: (message: string) => void;
};

export const MessageForm: FC<MessageFormProps> = ({ onSendHandler }) => {
  const [text, setText] = useState<string>('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

  const handleMessageSend = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onSendHandler(text);
    setText('');
  };

  return (
    <div className="form-inline py-3 pr-3">
      <div className="form-group col-8">
        <input
          className="form-control w-100"
          name="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Input text"
        />
      </div>

      <button
        type="button"
        className="btn btn-warning col-4"
        onClick={handleMessageSend}
        disabled={!text.length}
      >
        Send
      </button>
    </div>
  );
};
